// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Elevix Apps',
		aboutText:
			'Get notified when your inventory is running low. Automate stock alerts and never run out of stock again.',
		logo: {
			src: '/logo.svg',
			alt: 'Welcome to Elevix Apps',
			text: 'Elevix Apps'
		}
	},
	footerColumns: [
		{
			category: 'Company',
			subCategories: [
				{
					subCategory: 'Privacy Policy',
					subCategoryLink: '/privacy-policy'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© ElevixApps.com 2025.'
	}
}
