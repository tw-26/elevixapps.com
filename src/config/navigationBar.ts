// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Welcome to Elevix Apps',
		text: 'Elevix Apps'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Privacy Policy', link: '/privacy-policy' }
	],
	navActions: [
		{
			name: 'Install on Shopify',
			link: 'https://apps.shopify.com/low-stock-alert-app',
			style: 'primary',
			size: 'lg'
		}
	]
}
