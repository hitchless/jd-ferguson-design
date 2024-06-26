/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			backgroundImage: {
				'signature': "url('/signature.png')",
				'tuepah': "url('/tuepah-front.jpg')",
				'tuepah-lg': "url('/tuepah-front-lg.jpg')",
				'hero-portfolio': "url('/heroes/portfolio.jpg')",
				'hero-portfolio-lg': "url('/heroes/portfolio-lg.jpg')",
				'hero-process': "url('/heroes/process-2.jpg')",
				'hero-process-lg': "url('/heroes/process-lg-2.jpg')",
				'hero-bio': "url('/heroes/bio.jpg')",
				'hero-bio-lg': "url('/heroes/bio-lg.jpg')",
				'hero-contact': "url('/heroes/contact.jpg')",
				'hero-contact-lg': "url('/heroes/contact-lg.jpg')",
				'hero-gratitude': "url('/heroes/gratitude-2.jpg')",
				'hero-gratitude-lg': "url('/heroes/gratitude-lg-2.jpg')",

				'craftsman': "url('/gallery/craftsman.jpg')",
				'modern': "url('/gallery/modern.jpg')",
				'french-country': "url('/gallery/french-country.jpg')",
				'poppy': "url('/gallery/poppy/poppy-cover.jpg')",
				'forillo': "url('/gallery/forillo/forillo-cover.jpg')",
				'wise': "url('/gallery/wise-island-cover.jpg')",
				'newcombe': "url('/gallery/newcombe-cover.jpg')",
				'stoik': "url('/gallery/stoik-cover.jpg')",
				'kirzinger': "url('/gallery/kirzinger-cover.jpg')",
			}
		},
		colors: {
			primary: colors.red,
			secondary: colors.sky,
			base: colors.slate,
		},
	},
	plugins: [
		require('flowbite/plugin'),
	],
}
