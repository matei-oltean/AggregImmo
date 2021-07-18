import { Offer, Parameters } from "./App"

export const getOffers = async (param: Parameters): Promise<Offer[]> => {
    const myHeaders = new Headers()
    myHeaders.append("Host", "www.orpi.com")
    // first get the zone codes
    let zoneCodes: string[] = []
    // first get the zoneIds
    for (const zipCode of param.zipCodes) {
        const zoneResponse: Response = await fetch(`https://www.orpi.com/recherche/autocompletion/${zipCode}`, { method: 'GET', redirect: 'follow', headers: myHeaders, mode: "no-cors" })
        const parsedResponse = await zoneResponse.json()

        parsedResponse.zipcode.forEach((v: { value: string })=> {
            zoneCodes.push(v.value)
        })
    }

    const parameters = `realEstateTypes[]=appartement${zoneCodes.map((code: string, index: number) => `&locations[${index}][value]=${code}`)}${param.minPrice ? `&minPrice=${param.minPrice}` : "" }${param.maxPrice ? `&maxPrice=${param.maxPrice}` : ""}${param.minArea ? `&minSurface=${param.minArea}` : ""}${param.maxArea ? `&maxSurface=${param.maxArea}` : "" }`

    const queryUrl = `https://www.orpi.com/recherche/ajax/buy?${encodeURI(parameters)}`

    const response = await fetch(queryUrl, { method: 'GET', redirect: 'follow', headers: myHeaders, mode: "no-cors" })
    const jsonResult = await response.json()
    const listing: any[] = jsonResult.items
    return listing.map(value => {
        return {
            link: `https://www.orpi.com/annonce-vente-${value.slug}`,
            title: "",
            description: value.longAd,
            zipCode: value.locationDescription,
            lastModifiedDate: new Date(value.onMarketSince),
            area: value.surface,
            price: value.price,
            pictureUrls: value.images,
            sold: value.sold
        }
    }).filter((value: Offer) => {return (!param.maxPricePerSqm || value.price / value.area <= param.maxPricePerSqm) && !value.sold})
}