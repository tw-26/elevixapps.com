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
			'Expertly made, responsive, accessible components in React and HTML ready to be used on your website or app. Just copy and paste them on your Tailwind CSS project.',
		logo: {
			src: '/logo.svg',
			alt: 'Welcome to Elevix Apps',
			text: 'Elevix Apps'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				}
			]
		},
		{
			category: 'Company',
			subCategories: [
				{
					subCategory: 'Privacy Policy',
					subCategoryLink: '/privacy-policy'
				}
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© ElevixApps.com 2025.'
	}
}
