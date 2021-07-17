import { Offer, Parameters } from "./App"

export const getOffers = async (param: Parameters): Promise<Offer[]> => {
    // first get the zone codes
    let zoneCodes: string[] = []
    // first get the zoneIds
    for (const zipCode of param.zipCodes) {
        const zoneResponse: Response = await fetch(`https://www.laforet.com/api/geo/cities/search?q=${zipCode}`, { method: 'GET' })

        const zoneArray: any[] = await zoneResponse.json()

        zoneArray.forEach((v: { code: string | number })=> {
            if (typeof v.code === "string") {
                zoneCodes.push(v.code)
            }
        })
    }

    const cities = zoneCodes.join(',')

    const queryUrl = `https://www.laforet.com/api/immo/properties?page=1&perPage=50&cities=${encodeURI(cities)}${ param.minPrice ? `&min=${param.minPrice}` : ""}${ param.maxPrice ? `&max=${param.maxPrice}` : ""}${param.minArea ? `&surface=${param.minArea}` : ""}&transaction=buy`

    const response = await fetch(queryUrl, { method: 'GET' })
    const jsonResult = await response.json()
    const listing: any[] = jsonResult.data
    return listing.map(value => {
        return {
            link: `https://www.laforet.com${value.path}`,
            title: value.title || "",
            description: value.description,
            zipCode: value.address.postcode,
            street: value.address.street,
            lastModifiedDate: new Date(value.updated_at * 1000),
            area: value.surface_carrez || value.surface,
            price: value.price,
            pictureUrls: value.photos
        }
    }).filter((value: Offer) => !param.maxPricePerSqm || value.price / value.area <= param.maxPricePerSqm)
}