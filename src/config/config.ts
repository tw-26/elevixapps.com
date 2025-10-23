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
	siteTitle: 'Elevix Low Stock Alert - Daily Email Alerts for Shopify Stores',
	siteDescription:
		'Daily low-stock alerts by email to prevent stockouts and missed sales. Automatic inventory monitoring for busy store owners. Set custom stock thresholds per product or store-wide.',
	ogImage: '/og.png',
	logo: {
		src: '/logo.svg',
		alt: 'Elevix Low Stock Alert App Logo'
	},
	canonical: true, // ✅ Enables <link rel="canonical"> for SEO
	noindex: false, // ✅ Make sure this is false for production
	mode: 'auto', // Light/dark auto mode
	scrollAnimations: false // Disabled for minimal site
}
