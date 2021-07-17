## Listings

https://www.bienici.com/realEstateAds-all.json?filters={"filterType":"buy","propertyType":["house","flat"],"maxPrice":400000,"minArea":20,"page":1,"sortBy":"relevance","sortOrder":"desc","onTheMarket":[true],"mapMode":"enabled","tileKeys":["9_259_176"],"blurInfoType":["disk","exact"],"size":10000}&positionOnly=true&access_token=EJtnAerGRmlKd3UjvaDVunZ3oWWz6DS0qB0tqOAuI20=:60a26dd47ef75500b6b1e380&id=60a26dd47ef75500b6b1e380

```json
[
    {
        "ads": [
            {
                "id": "adapt-immo-0601112552",
                "lon": 2.23451,
                "lat": 48.65342,
                "price": 270000
            },
            {
                "id": "adapt-immo-0601113006",
                "lon": 2.2784,
                "lat": 48.66932,
                "price": 398000
            }
        ]
    }
]
```

Ou

https://www.bienici.com/realEstateAds.json?filters=%7B%22size%22%3A24%2C%22from%22%3A0%2C%22showAllModels%22%3Afalse%2C%22filterType%22%3A%22buy%22%2C%22propertyType%22%3A%5B%22flat%22%5D%2C%22page%22%3A1%2C%22sortBy%22%3A%22relevance%22%2C%22sortOrder%22%3A%22desc%22%2C%22onTheMarket%22%3A%5Btrue%5D%2C%22zoneIdsByTypes%22%3A%7B%22zoneIds%22%3A%5B%22-20873%22%5D%7D%7D

https://www.bienici.com/realEstateAds.json?filters=%7B%22size%22%3A24%2C%22from%22%3A24%2C%22showAllModels%22%3Afalse%2C%22filterType%22%3A%22buy%22%2C%22propertyType%22%3A%5B%22flat%22%5D%2C%22page%22%3A2%2C%22sortBy%22%3A%22relevance%22%2C%22sortOrder%22%3A%22desc%22%2C%22onTheMarket%22%3A%5Btrue%5D%2C%22zoneIdsByTypes%22%3A%7B%22zoneIds%22%3A%5B%22-20873%22%5D%7D%7D&extensionType=extendedIfNoResult&leadingCount=2&access_token=EJtnAerGRmlKd3UjvaDVunZ3oWWz6DS0qB0tqOAuI20%3D%3A60a26dd47ef75500b6b1e380&id=60a26dd47ef75500b6b1e380

filters={"size":24,"from":0,"showAllModels":false,"filterType":"buy","propertyType":["flat"],"page":1,"sortBy":"relevance","sortOrder":"desc","onTheMarket":[true],"zoneIdsByTypes":{"zoneIds":["-20873"]}}

For pages 2 and beyond: change `from` (+= `perPage`) and `page`.

```json
{
    "total": 192,
    "from": 0,
    "perPage": 24,
    "realEstateAds": [
        {
            "blurInfo": {
                "type": "disk",
                "radius": 100,
                "position": {
                    "lat": 48.85034610098562,
                    "lon": 2.3499641539908875
                },
                "centroid": {
                    "lat": 48.85034610098562,
                    "lon": 2.3499641539908875
                },
                "bbox": [
                    2.348599011687925,
                    48.84944778039877,
                    2.35132929629385,
                    48.85124442157247
                ]
            },
            "city": "Paris 5e",
            "postalCode": "75005",
            "chargingStations": {
                "providers": []
            },
            "id": "century-21-202_2421_10464",
            "adType": "buy",
            "propertyType": "flat",
            "reference": "10464",
            "description": "BOULEVARD SAINT GERMAIN  2/3 pièces.   RARE sur le marché. Idéalement situé au pied de la station de métro ligne 10 « MAUBERT MUTUALITE » et des commerces de la place Maubert (Boucherie, Primeur, Boulangerie, Poissonnerie, Opticien, ), à 6 minutes à pied de la cathédrale Notre Dame, venez vite découvrir cet appartement à rénover avec moulure au plafond et boiserie murale de 63m² (loi carrez). Au 1er étage avec ascenseur d'un immeuble de grand standing avec gardien, ce bien offrant une hauteur sous plafond de 2,90 mètres est composé d'un double séjour de 31,7 m², avec séjour et salle à manger (aménageable en seconde chambre), d'une chambre avec rangement de 13,4m², d'une cuisine, d'une salle d'eau et d'un WC indépendant. Cette annonce est idéale pour un couple avec ou sans enfant ainsi que pour une profession libérale ou bureau. L'avis du conseiller : Une adresse, une carte scolaire très courtisée (collège et lycée : Henri IV, élémentaire : Pontoise, maternelle : Sommerard).  Une cave en sous-sol complète cette annonce.",
            "publicationDate": "2021-06-26T23:30:01.066Z",
            "modificationDate": "2021-07-09T05:05:42.906Z",
            "newProperty": false,
            "yearOfConstruction": 1850,
            "accountType": "agency",
            "photoWatermarkAlias": "c21-claim-2018-rvb",
            "floor": 1,
            "hasIntercom": false,
            "hasElevator": false,
            "hasCaretaker": false,
            "hasDoorCode": true,
            "floorQuantity": 6,
            "isExclusiveSaleMandate": true,
            "bedroomsQuantity": 1,
            "roomsQuantity": 3,
            "surfaceArea": 63.51,
            "hasPool": false,
            "bathroomsQuantity": 0,
            "showerRoomsQuantity": 1,
            "toiletQuantity": 1,
            "cellarsOrUndergroundsQuantity": 1,
            "parkingPlacesQuantity": 0,
            "terracesQuantity": 0,
            "firePlacesQuantity": 0,
            "balconyQuantity": 0,
            "hasConservatory": false,
            "hasTVCable": false,
            "hasAlarm": false,
            "heating": "Individuel au gaz Radiateur individuel gaz Gaz",
            "hasSeparateToilet": false,
            "energyValue": 151,
            "energyClassification": "D",
            "greenhouseGazValue": 35,
            "greenhouseGazClassification": "D",
            "price": 882000,
            "feesChargedTo": "purchaser",
            "priceWithoutFees": 840000,
            "agencyFeePercentage": 5,
            "isInCondominium": true,
            "condominiumPartsQuantity": 33,
            "annualCondominiumFees": 1920,
            "agencyFeeUrl": "https://www.century21-jaures-boulogne.com/mentions_legales/",
            "photos": [
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_CB4AC6A0-6D17-49CF-9124-B243EEC5DCB6.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_CB4AC6A0-6D17-49CF-9124-B243EEC5DCB6.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_CB4AC6A0-6D17-49CF-9124-B243EEC5DCB6.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_F2749B4E-4AE9-41A8-9284-85ADAD6330D3.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_F2749B4E-4AE9-41A8-9284-85ADAD6330D3.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_F2749B4E-4AE9-41A8-9284-85ADAD6330D3.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_FCF41521-6C65-4786-AA1A-4D8DF3D2294E.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_FCF41521-6C65-4786-AA1A-4D8DF3D2294E.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_FCF41521-6C65-4786-AA1A-4D8DF3D2294E.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_27A48CA8-C496-4D78-B8B3-11FA900EB5E2.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_27A48CA8-C496-4D78-B8B3-11FA900EB5E2.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_27A48CA8-C496-4D78-B8B3-11FA900EB5E2.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_915B9372-F041-417E-BE79-B940DEEAC679.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_915B9372-F041-417E-BE79-B940DEEAC679.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_915B9372-F041-417E-BE79-B940DEEAC679.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_06E4908F-4643-4370-97DD-6696CC9C5F67.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_06E4908F-4643-4370-97DD-6696CC9C5F67.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_06E4908F-4643-4370-97DD-6696CC9C5F67.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_83953316-53EC-4849-9D6E-A53B110F566E.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_83953316-53EC-4849-9D6E-A53B110F566E.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_83953316-53EC-4849-9D6E-A53B110F566E.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_76622A89-0A7C-45E2-B361-EDC5510D20C8.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_76622A89-0A7C-45E2-B361-EDC5510D20C8.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_76622A89-0A7C-45E2-B361-EDC5510D20C8.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_67960A09-97BC-4C5E-8A85-0E3495694513.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_67960A09-97BC-4C5E-8A85-0E3495694513.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_67960A09-97BC-4C5E-8A85-0E3495694513.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_4FAAC36E-4494-450E-A73D-FE5A03CB4516.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_4FAAC36E-4494-450E-A73D-FE5A03CB4516.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_4FAAC36E-4494-450E-A73D-FE5A03CB4516.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_16C1C3D6-46A0-417B-A8BE-791535DD2E85.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_16C1C3D6-46A0-417B-A8BE-791535DD2E85.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_16C1C3D6-46A0-417B-A8BE-791535DD2E85.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_24830AFE-133A-4BA7-9491-E2475D5089E2.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_24830AFE-133A-4BA7-9491-E2475D5089E2.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_24830AFE-133A-4BA7-9491-E2475D5089E2.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_8E4C6782-7EA0-4D68-9F7C-4CC68F55F46C.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_8E4C6782-7EA0-4D68-9F7C-4CC68F55F46C.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_8E4C6782-7EA0-4D68-9F7C-4CC68F55F46C.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_6009440B-3655-4FC0-B90E-EC4B73A37FB1.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_6009440B-3655-4FC0-B90E-EC4B73A37FB1.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_6009440B-3655-4FC0-B90E-EC4B73A37FB1.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_DBEDB9C4-EBD0-44C9-A3E8-7E407BE2EFEF.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_DBEDB9C4-EBD0-44C9-A3E8-7E407BE2EFEF.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_DBEDB9C4-EBD0-44C9-A3E8-7E407BE2EFEF.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_320618DD-7A12-412B-B6EB-FA8E5546FEE8.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_320618DD-7A12-412B-B6EB-FA8E5546FEE8.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_320618DD-7A12-412B-B6EB-FA8E5546FEE8.jpg"
                },
                {
                    "url_photo": "https://www.century21.fr/imagesBien/202/2421/c21_202_2421_10464_1_CF0B9BFD-A354-444C-95E1-2247C71CE558.jpg",
                    "photo": "century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_CF0B9BFD-A354-444C-95E1-2247C71CE558.jpg",
                    "url": "https://file.bienici.com/photo/century-21-202_2421_10464_www.century21.fr_imagesBien_202_2421_c21_202_2421_10464_1_CF0B9BFD-A354-444C-95E1-2247C71CE558.jpg"
                }
            ],
            "adCreatedByPro": true,
            "virtualTours": [
                {
                    "originalUrl": "https://nodalview.com/xfwmSWoR6ZHehfYv9857kBxv",
                    "url": "https://nodalview.com/xfwmSWoR6ZHehfYv9857kBxv",
                    "accepted": true,
                    "https": true,
                    "mobileSupport": true,
                    "type": "photos 360, déplacements suivi",
                    "size": "responsive",
                    "id": "century-21-202_2421_10464_virtualTour_0"
                }
            ],
            "district": {
                "id_polygone": 100547,
                "id_type": 1,
                "name": "Paris 5e Arrondissement - Monge - Jussieu",
                "libelle": "Monge - Jussieu",
                "cp": "75005",
                "code_insee": "75105",
                "id": 100547,
                "insee_code": "75105",
                "postal_code": "75005",
                "type_id": 1
            },
            "with360": true,
            "status": {
                "onTheMarket": true,
                "closedByUser": false,
                "autoImported": true,
                "isLeading": true,
                "highlighted": false,
                "is3dHighlighted": false
            },
            "addressKnown": true,
            "displayDistrictName": true,
            "pricePerSquareMeter": 13226.263580538498,
            "postalCodeForSearchFilters": "75005",
            "descriptionTextLength": 1034,
            "title": "",
            "userRelativeData": {
                "importAccountId": "558abf6bea7355e500782faa",
                "accountIds": [
                    "century-21-29893911"
                ],
                "searchAccountIds": [
                    "century-21-29893911",
                    "contract-type-basic",
                    "558abf6bea7355e500782faa",
                    "5e441db342fca6029209b73d",
                    "contract-type-premium"
                ],
                "isAdmin": false,
                "isAdModifier": false,
                "canSeeExactPosition": false,
                "canSeeAddress": false,
                "canSeeStats": false,
                "canSeeContacts": false,
                "canSeeRealDates": false,
                "canSeePublicationCertificateHtml": false,
                "canSeePublicationCertificatePdf": false
            },
            "priceHasDecreased": false,
            "transactionType": "buy",
            "adTypeFR": "vente",
            "with3dModel": false,
            "endOfPromotedAsExclusive": 0,
            "opticalFiberStatus": "deploye",
            "nothingBehindForm": false,
            "highlightMailContact": false,
            "customerId": "century-21-agence-jaures",
            "displayInsuranceEstimation": true,
            "phoneDisplays": []
        },
        ...
    ]
}
```

For the zone ids:

https://res.bienici.com/place.json?q=75005

```json
{
    "id": "AXgcuIyLWGTYgpgylw2N",
    "name": "Paris 5e",
    "type": "arrondissement",
    "admin_level": "9",
    "insee_code": "75105",
    "insee_codes": [
        "75105"
    ],
    "postalCodes": [
        "75005"
    ],
    "boundingBox": {
        "west": 2.3367280801083,
        "south": 48.8367768766145,
        "east": 2.36602869922501,
        "north": 48.8540518931366
    },
    "zoneIds": [
        "-20873"
    ],
    "population": 60938,
    "score": 5032.6035
}
```

## Result

https://www.bienici.com/realEstateAd.json?id=immo-facile-40227042

```js
`https://www.bienici.com/realEstateAd.json?id=${id}`
```

```json
{
    "reference": "929",
    "propertyType": "flat",
    "postalCode": "75005",
    "city": "Paris 5e",
    "price": 399000,
    "agencyFeePercentage": 5,
    "surfaceArea": 35,
    "roomsQuantity": 2,
    "bedroomsQuantity": 1,
    "title": "VENTE APPARTEMENT PARIS 75005 SECTORISATION HENRI IV",
    "description": "Paris V - Sectorisation Henri IV - Rue Xavier Privas - Paris Attitude Vente vous propose un appartement situé au 5ème étage sans ascenseur dans un immeuble typique du quartier latin bâti dans la deuxième moitié du XVIII siècle, en bon état. L'entrée est sur un couloir qui dessert le séjour ouvert sur la cuisine équipée, ensuite on passe à la chambre et à la salle d'eau avec douche et toilettes. L'exposition sud-est et l'étage élevé permettent de garantir une belle luminosité dans l'appartement. Visite virtuelle disponible sur le site de Paris Attitude Vente. dont 5.00 % honoraires TTC à la charge de l'acquéreur.<br>Copropriété de 19 lots (Pas de procédure en cours).<br>Charges annuelles : 1417.17 euros.",
    "yearOfConstruction": 1750,
    "showerRoomsQuantity": 1,
    "toiletQuantity": 1,
    "hasDoorCode": true,
    "hasFirePlace": true,
    "isExclusiveSaleMandate": true,
    "photos": [
        {
            "title": "Photo n°1",
            "url_photo": "https://media.immo-facile.com/office8/parisattitude/catalog/images/pr_p/4/0/2/2/7/0/4/2/40227042a.jpg?DATEMAJ=07/10/2020-21:46:03",
            "photo": "immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042a.jpg_DATEMAJ_07_10_2020-21_46_03",
            "url": "https://file.bienici.com/photo/immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042a.jpg_DATEMAJ_07_10_2020-21_46_03"
        },
        {
            "title": "Photo n°2",
            "url_photo": "https://media.immo-facile.com/office8/parisattitude/catalog/images/pr_p/4/0/2/2/7/0/4/2/40227042b.jpg?DATEMAJ=07/10/2020-21:46:03",
            "photo": "immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042b.jpg_DATEMAJ_07_10_2020-21_46_03",
            "url": "https://file.bienici.com/photo/immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042b.jpg_DATEMAJ_07_10_2020-21_46_03"
        },
        {
            "title": "Photo n°3",
            "url_photo": "https://media.immo-facile.com/office8/parisattitude/catalog/images/pr_p/4/0/2/2/7/0/4/2/40227042c.jpg?DATEMAJ=07/10/2020-21:46:03",
            "photo": "immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042c.jpg_DATEMAJ_07_10_2020-21_46_03",
            "url": "https://file.bienici.com/photo/immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042c.jpg_DATEMAJ_07_10_2020-21_46_03"
        },
        {
            "title": "Photo n°4",
            "url_photo": "https://media.immo-facile.com/office8/parisattitude/catalog/images/pr_p/4/0/2/2/7/0/4/2/40227042d.jpg?DATEMAJ=07/10/2020-21:46:03",
            "photo": "immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042d.jpg_DATEMAJ_07_10_2020-21_46_03",
            "url": "https://file.bienici.com/photo/immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042d.jpg_DATEMAJ_07_10_2020-21_46_03"
        },
        {
            "title": "Photo n°5",
            "url_photo": "https://media.immo-facile.com/office8/parisattitude/catalog/images/pr_p/4/0/2/2/7/0/4/2/40227042e.jpg?DATEMAJ=07/10/2020-21:46:03",
            "photo": "immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042e.jpg_DATEMAJ_07_10_2020-21_46_03",
            "url": "https://file.bienici.com/photo/immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042e.jpg_DATEMAJ_07_10_2020-21_46_03"
        },
        {
            "title": "Photo n°6",
            "url_photo": "https://media.immo-facile.com/office8/parisattitude/catalog/images/pr_p/4/0/2/2/7/0/4/2/40227042f.jpg?DATEMAJ=07/10/2020-21:46:03",
            "photo": "immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042f.jpg_DATEMAJ_07_10_2020-21_46_03",
            "url": "https://file.bienici.com/photo/immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042f.jpg_DATEMAJ_07_10_2020-21_46_03"
        },
        {
            "title": "Photo n°7",
            "url_photo": "https://media.immo-facile.com/office8/parisattitude/catalog/images/pr_p/4/0/2/2/7/0/4/2/40227042g.jpg?DATEMAJ=07/10/2020-21:46:03",
            "photo": "immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042g.jpg_DATEMAJ_07_10_2020-21_46_03",
            "url": "https://file.bienici.com/photo/immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042g.jpg_DATEMAJ_07_10_2020-21_46_03"
        },
        {
            "title": "Photo n°8",
            "url_photo": "https://media.immo-facile.com/office8/parisattitude/catalog/images/pr_p/4/0/2/2/7/0/4/2/40227042h.jpg?DATEMAJ=07/10/2020-21:46:03",
            "photo": "immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042h.jpg_DATEMAJ_07_10_2020-21_46_03",
            "url": "https://file.bienici.com/photo/immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042h.jpg_DATEMAJ_07_10_2020-21_46_03"
        },
        {
            "title": "Photo n°9",
            "url_photo": "https://media.immo-facile.com/office8/parisattitude/catalog/images/pr_p/4/0/2/2/7/0/4/2/40227042i.jpg?DATEMAJ=07/10/2020-21:46:03",
            "photo": "immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042i.jpg_DATEMAJ_07_10_2020-21_46_03",
            "url": "https://file.bienici.com/photo/immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042i.jpg_DATEMAJ_07_10_2020-21_46_03"
        },
        {
            "url_photo": "https://media.immo-facile.com/office8/parisattitude/catalog/images/pr_p/4/0/2/2/7/0/4/2/40227042j.jpg?DATEMAJ=07/10/2020-21:46:03",
            "photo": "immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042j.jpg_DATEMAJ_07_10_2020-21_46_03",
            "url": "https://file.bienici.com/photo/immo-facile-40227042_media.immo-facile.com_office8_parisattitude_catalog_images_pr_p_4_0_2_2_7_0_4_2_40227042j.jpg_DATEMAJ_07_10_2020-21_46_03"
        }
    ],
    "isRecent": false,
    "workToDo": false,
    "isCondominiumInProcedure": false,
    "feesChargedTo": "purchaser",
    "priceWithoutFees": 380000,
    "agencyFeeUrl": "https://media.immo-facile.com/segments/immo/catalog/images/manufacturers_bareme/96756.pdf",
    "energyClassification": "VI",
    "greenhouseGazClassification": "VI",
    "adType": "buy",
    "id": "immo-facile-40227042",
    "newProperty": false,
    "adCreatedByPro": true,
    "heating": "individuel ",
    "publicationDate": "1970-01-01T00:00:00.000Z",
    "modificationDate": "2021-07-06T05:17:18.173Z",
    "district": {
        "id_polygone": 100548,
        "id_type": 1,
        "name": "Paris 5e Arrondissement - Sorbonne - Quartier Latin",
        "libelle": "Sorbonne - Quartier Latin",
        "cp": "75005",
        "code_insee": "75105",
        "id": 100548,
        "insee_code": "75105",
        "postal_code": "75005",
        "type_id": 1
    },
    "blurInfo": {
        "type": "disk",
        "radius": 100,
        "position": {
            "lat": 48.85184888165649,
            "lon": 2.3453578141801277
        },
        "centroid": {
            "lat": 48.85184888165649,
            "lon": 2.3453578141801277
        },
        "bbox": [
            2.3439925886874855,
            48.85095056106936,
            2.34672303967277,
            48.85274720224361
        ]
    },
    "condominiumPartsQuantity": 19,
    "isInCondominium": true,
    "virtualTours": [
        {
            "originalUrl": "https://envisite.net/vtour/fr/zwwho6/frame",
            "url": "https://envisite.net/vtour/fr/zwwho6/frame/nocdv/x5-ZopqYoA?realEstateAdId=immo-facile-40227042",
            "type": "photos 360, déplacements suivi",
            "accepted": true,
            "https": true,
            "size": "responsive",
            "mobileSupport": true,
            "requiresAccountIdInQueryString": true,
            "id": "immo-facile-40227042_virtualTour_0"
        }
    ],
    "chargingStations": {
        "providers": []
    },
    "floorQuantity": 6,
    "annualCondominiumFees": 1417.17,
    "condominiumDetailedProcedure": "Pas de procédure en cours",
    "status": {
        "onTheMarket": true,
        "closedByUser": false,
        "autoImported": true,
        "isLeading": true,
        "highlighted": false,
        "is3dHighlighted": false
    },
    "contactRelativeData": {
        "contactNameToDisplay": "Paris Attitude Vente",
        "phoneToDisplay": "+33 1 85 73 02 20",
        "hasEmailToDisplay": true,
        "imageName": "f797e2f3-6262-4416-a7d6-0ea39cc63b5e",
        "contactIsAgency": true,
        "contactIsPro": true,
        "callTrackingEnabled": true,
        "rcs": "49518962300053",
        "address": {
            "street": "115 rue  Saint Dominique",
            "city": "Paris",
            "postalCode": "75007"
        },
        "accountType": "agency",
        "contactEmailType": "normal"
    },
    "addressKnown": true,
    "displayDistrictName": true,
    "pricePerSquareMeter": 10857.142857142857,
    "postalCodeForSearchFilters": "75005",
    "descriptionTextLength": 704,
    "userRelativeData": {
        "importAccountId": "566ff1b69b2b0ad718a0cdff",
        "accountIds": [
            "immo-facile-96756"
        ],
        "searchAccountIds": [],
        "isAdmin": false,
        "isAdModifier": false,
        "canSeeExactPosition": false,
        "canSeeAddress": false,
        "canSeeStats": false,
        "canSeeContacts": false,
        "canSeeRealDates": false,
        "canSeePublicationCertificateHtml": false,
        "canSeePublicationCertificatePdf": false
    },
    "priceHasDecreased": true,
    "transactionType": "buy",
    "adTypeFR": "vente",
    "with3dModel": false,
    "endOfPromotedAsExclusive": 0,
    "opticalFiberStatus": "deploye",
    "phoneDisplays": [],
    "thresholdDate": "2021-05-15T21:35:46.465Z",
    "generatedTitle": "Appartement 2 pièces 35 m², Paris 5e - 399 000 €"
}
```

## Url page of the announcement

https://www.bienici.com/annonce/immo-facile-40227042

```js
`https://www.bienici.com/annonce/${id}`
```
