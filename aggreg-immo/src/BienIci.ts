import { Offer, Parameters } from "./App"

interface bienIciParam {
    size: number
    page: number
    from: number
    propertyType: string[]
    filterType: string
    minPrice?: number
    maxPrice?: number
    minArea?: number
    maxArea?: number
    zoneIdsByTypes: {
        zoneIds: string[]
    }
    onTheMarket: boolean[]
}

export const getOffers = async (param: Parameters): Promise<Offer[]> => {
    let zoneIds: string[] = []
    // first get the zoneIds
    for (const zipCode of param.zipCodes) {
        const response = await fetch(`https://res.bienici.com/place.json?q=${zipCode}`, { method: 'GET' })
        zoneIds.push(...(await response.json())["zoneIds"])
    }

    // 50 should be enough so that we do not query multiple pages
    const queryParam: bienIciParam = {
        size: 50,
        page: 1,
        from: 0,
        zoneIdsByTypes: {
            zoneIds
        },
        filterType: "buy",
        onTheMarket: [true],
        propertyType: ["flat"]
    }
    if (param.minArea)
        queryParam.minArea = param.minArea
    if (param.maxArea)
        queryParam.maxArea = param.maxArea
    if (param.minPrice)
        queryParam.minPrice = param.minPrice
    if (param.maxPrice)
        queryParam.maxPrice = param.maxPrice
    const queryUrl = `https://www.bienici.com/realEstateAds.json?filters=${encodeURI(JSON.stringify(queryParam))}`
    const myHeaders = new Headers()
    myHeaders.append("Host", "www.bienici.com")

    const response = await fetch(queryUrl, { method: 'GET', redirect: 'follow', headers: myHeaders, mode: "cors" })
    const jsonResult = await response.json()
    const listing: any[] = jsonResult.realEstateAds
    return listing.map(value => {
        return {
            link: `https://www.bienici.com/annonce/${value.id}`,
            title: value.title || "",
            description: value.description,
            zipCode: value.postalCode,
            lastModifiedDate: new Date(value.modificationDate),
            area: value.surfaceArea,
            price: value.price,
            pictureUrls: value.photos.map((v: { url_photo: string }) => v.url_photo)
        }
    }).filter((value: Offer) => !param.maxPricePerSqm || value.price/value.area <= param.maxPricePerSqm)
}