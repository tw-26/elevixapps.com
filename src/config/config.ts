// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Elevix – Smart Announcement Bars for Shopify',
	siteDescription:
		'Elevix helps Shopify merchants display targeted announcements inside customer account pages to drive sales, reduce support, and boost retention.',
	ogImage: '/og.png',
	logo: {
		src: '/logo.svg',
		alt: 'Elevix app logo'
	},
	canonical: true, // ✅ Enables <link rel="canonical"> for SEO
	noindex: false, // ✅ Make sure this is false for production
	mode: 'auto', // Light/dark auto mode
	scrollAnimations: true // Use only if animations are actually used
}
