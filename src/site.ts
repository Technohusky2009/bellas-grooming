export const site = {
	name: "Bella's Dog Grooming & Pet Food",
	tagline: "Gentle dog grooming in Louth. Puppies welcome.",
	phoneDisplay: "01507 606863",
	phoneTel: "+441507606863",
	facebookUrl: "https://www.facebook.com/shaggydogsalon",
	facebookLabel: "facebook.com/shaggydogsalon",
	address: {
		line1: "180 Eastgate",
		town: "Louth, Lincolnshire",
		postcode: "LN11 9AG",
		full: "180 Eastgate, Louth, Lincolnshire, LN11 9AG",
	},
	lat: 53.3677912,
	lng: 0.0025784,
	mapsEmbed:
		"https://www.openstreetmap.org/export/embed.html?bbox=0.0000784%2C53.3662912%2C0.0050784%2C53.3692912&layer=mapnik&marker=53.3677912%2C0.0025784",
	mapsDirections:
		"https://www.google.com/maps/dir/?api=1&destination=180%20Eastgate%2C%20Louth%2C%20Lincolnshire%20LN11%209AG",
	seoTitle:
		"Bella's Dog Grooming & Pet Food — Dog and Cat Groomers in Louth",
	seoDescription:
		"Gentle dog and cat grooming on Eastgate in Louth. Nail clipping, full grooms and nervous-dog appointments. Open Monday to Saturday, 9am to 3pm. Call 01507 606863.",
	footerLine: "Dog grooming, 180 Eastgate, Louth.",
	trust: [
		"4.8 out of 5 from 63 Google reviews",
		"Owners describe us as patient with nervous, anxious and difficult dogs",
		"Puppies welcome for gentle first grooms",
	],
} as const;

export const hoursRows = [
	{ day: "Monday", hours: "9:00am to 3:00pm", closed: false },
	{ day: "Tuesday", hours: "9:00am to 3:00pm", closed: false },
	{ day: "Wednesday", hours: "9:00am to 3:00pm", closed: false },
	{ day: "Thursday", hours: "9:00am to 3:00pm", closed: false },
	{ day: "Friday", hours: "9:00am to 3:00pm", closed: false },
	{ day: "Saturday", hours: "9:00am to 3:00pm", closed: false },
	{ day: "Sunday", hours: "Closed", closed: true },
] as const;

export const services = [
	{
		slug: "full-groom",
		title: "Full groom",
		line: "Clipped, washed, dried and finished.",
		shoot: "Dog being groomed on the table.",
		image: "/images/dog-grooming-bellas.jpg",
		alt: "Dog being groomed at Bella's Dog Grooming in Louth.",
	},
	{
		slug: "bath-and-brush",
		title: "Bath and brush",
		line: "A clean, tidy groom with no clippers.",
		shoot: "Dog after a professional grooming session.",
		image: "/images/dog-being-groomed.jpg.avif",
		alt: "Dog after grooming at Bella's Dog Grooming in Louth.",
	},
	{
		slug: "nails",
		title: "Nail clipping",
		line: "Including for dogs that hate having their nails done.",
		note: "We are used to dogs who would rather not. It is a two-minute job when someone knows what they are doing. Dogs that will not let anyone near their paws are welcome.",
		shoot:
			"A close-up of paws and clippers during a real appointment. Hands in frame. No product styling.",
		image: undefined,
		alt: "Photo coming soon of nail clipping at Bella's Dog Grooming in Louth.",
	},
	{
		slug: "cat-grooming",
		title: "Cat grooming",
		line: "Yes, we groom cats.",
		note: "If your cat has never been groomed before, tell us when you book.",
		shoot:
			"A cat being groomed on the table. The handler's hands visible. The cat looking unbothered, not dressed up.",
		image: undefined,
		alt: "Photo coming soon of cat grooming at Bella's Dog Grooming in Louth.",
	},
] as const;

export const jsonLd = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: site.name,
	description: site.seoDescription,
	telephone: site.phoneTel,
	sameAs: [site.facebookUrl],
	address: {
		"@type": "PostalAddress",
		streetAddress: "180 Eastgate",
		addressLocality: "Louth",
		addressRegion: "Lincolnshire",
		postalCode: "LN11 9AG",
		addressCountry: "GB",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: site.lat,
		longitude: site.lng,
	},
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			],
			opens: "09:00",
			closes: "15:00",
		},
	],
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "4.8",
		reviewCount: "63",
		bestRating: "5",
		worstRating: "1",
	},
};

export function pageHead(title: string, description: string) {
	return {
		meta: [
			{ title },
			{ name: "description", content: description },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ name: "twitter:card", content: "summary" },
		],
	};
}
