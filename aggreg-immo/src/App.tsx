/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'

import {
	ActionButton,
	ChoiceGroup,
	IStackTokens,
	Stack,
	TextField,
	Toggle
} from '@fluentui/react'

import { getOffers as getBIOffers } from "./BienIci"
import { getOffers as getLFOffers } from "./LaForet"

const stackTokens: IStackTokens = { childrenGap: 20 }

const stackStyle = { marginRight: 15 }

export interface Parameters {
	minArea?: number
	maxArea?: number
	minPrice?: number
	maxPrice?: number
	zipCodes: string[]
	maxPricePerSqm?: number
}

export interface Offer {
	link: string
	title: string
	description: string
	area: number
	price: number
	zipCode: string
	lastModifiedDate: Date
	pictureUrls: string[]
	street?: string
}

enum SortType {
	price = "Price",
	ppsm = "PPSM",
	area = "Area",
	date = "Date"
}

function App() {
	const [minArea, setMinArea] = useState(0)
	const [maxArea, setMaxArea] = useState(0)
	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(0)
	const [maxPricePerSqm, setMaxPPSM] = useState(0)
	const [sortType, setSortType] = useState(SortType.date)
	const [zipCodes, setZip] = useState(["75005"])
	const [listings, setListings] = useState<Offer[]>([])
	const [increasing, setIncreasing] = useState(-1)

	return (
		<div>
			<div style={{ flex: 1, flexDirection: 'row', display: "flex", margin: 10, flexWrap: 'wrap' }}>
				<Stack tokens={stackTokens} style={stackStyle}>
					<TextField
						label="Min Price"
						placeholder="Minimum price in k€"
						onChange={(_, newValue?: string) => {
							if (newValue) {
								setMinPrice(1000 * Number(newValue))
							}
						}}
						styles={{ fieldGroup: { width: 60 } }}
					/>

					<TextField
						label="Max Price"
						placeholder="Maximum price in k€"
						onChange={(_, newValue?: string) => {
							if (newValue) {
								setMaxPrice(1000 * Number(newValue))
							}
						}}
						styles={{ fieldGroup: { width: 60 } }}
					/>
				</Stack>

				<Stack tokens={stackTokens} style={stackStyle}>
					<TextField
						label="Min Area"
						onChange={(_, newValue?: string) => {
							if (newValue) {
								setMinArea(Number(newValue))
							}
						}}
						styles={{ fieldGroup: { width: 50 } }}
					/>

					<TextField
						label="Max Area"
						onChange={(_, newValue?: string) => {
							if (newValue) {
								setMaxArea(Number(newValue))
							}
						}}
						styles={{ fieldGroup: { width: 50 } }}
					/>
				</Stack>

				<Stack tokens={stackTokens} style={stackStyle}>
					<TextField
						label="Max price per m²"
						onChange={(_, newValue?: string) => {
							if (newValue) {
								setMaxPPSM(Number(newValue))
							}
						}}
						styles={{ fieldGroup: { width: 120 } }}
					/>
					<TextField
						label="Zip codes"
						defaultValue="75005"
						onChange={(_, newZipValue?: string) => {
							if (newZipValue) {
								// Values between 1 and 20 should correspond to districts of Paris
								setZip(newZipValue.split(',').map((z: string) => z.length > 2 ? z : `${75000 + Number(z)}`))
							}
						}}
						styles={{ fieldGroup: { width: 120 } }}
					/>
				</Stack>

				<ActionButton
					iconProps={{ iconName: "Search" }}
					onClick={() => {
						const params: Parameters = {
							maxArea,
							minArea,
							minPrice,
							maxPrice,
							zipCodes,
							maxPricePerSqm
						}
						updateListings(params, setListings)
					}}
					style={{ alignSelf: 'center', marginRight: 15 }}
				>
					Search
				</ActionButton>
				<div>
					<ChoiceGroup
						label="Sort by"
						defaultSelectedKey={SortType.date}
						options={
							[
								{ key: SortType.price, text: "Price" },
								{ key: SortType.ppsm, text: "Price per m²" },
								{ key: SortType.area, text: "Area" },
								{ key: SortType.date, text: "Last modified" }
							]
						}
						onChange={
							(_, option) => {
								if (option)
									setSortType(option.key as SortType)
							}
						}
						style={{ marginRight: 10, marginBottom: 5 }}
					/>
					<Toggle
						onText="Increasing"
						offText="Decreasing"
						onChange={() => setIncreasing(-increasing)}
						defaultChecked={false}
					/>
				</div>
			</div>
			<div>{List(listings, sortType, increasing)}</div>
		</div>
	)
}

function List(offers: Offer[], sortType: SortType, increasing: number) {
	if (offers.length === 0)
		return <></>
	offers.sort((a, b) => {
		switch (sortType) {
			case SortType.price:
				return increasing * (a.price - b.price)
			case SortType.ppsm:
				return increasing * ((a.price / a.area) - (b.price / b.area))
			case SortType.area:
				return increasing * (a.area - b.area)
			case SortType.date:
			default:
				return increasing * (a.lastModifiedDate.getTime() - b.lastModifiedDate.getTime())
		}
	})
	return <div>{offers.map(renderOffer)}</div>
}

const updateListings = async (parameters: Parameters, updateHook: React.Dispatch<React.SetStateAction<Offer[]>>) => {
	const offers = await getBIOffers(parameters)
	offers.push(...await getLFOffers(parameters))
	updateHook(offers)
}

const renderOffer = (offer: Offer): JSX.Element => {
	return (
		<div>
			<div style={{ flex: 1, flexDirection: 'column', display: "flex", margin: 10 }}>
				<a href={offer.link} target="_blank" rel="noreferrer">{offer.zipCode} {offer.title}</a>
				<a>{offer.area} m²</a>
				<a>{offer.price.toLocaleString("fr-FR")} €</a>
				<a>{Math.round(offer.price / offer.area).toLocaleString("fr-FR")} €/m²</a>
				<a>{offer.lastModifiedDate.toLocaleString("fr-FR")}</a>
				{
					offer.street && <a>{offer.street}</a>
				}
				<a>{stripTags(offer.description)}</a>
				<div>
					{offer.pictureUrls.map((url: string) => <img src={url} height={120} />)}
				</div>
			</div>
		</div>
	)
}

const stripTags = (text: string) => {
	let doc = new DOMParser().parseFromString(text, 'text/html')
	return doc.body.textContent || ""
}

export default App
