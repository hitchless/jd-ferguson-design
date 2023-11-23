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
				'tuepah': "url('/tuepah-front.jpg')",
				'tuepah-lg': "url('/tuepah-front-lg.jpg')",
				'hero-portfolio': "url('/heroes/portfolio.jpg')",
				'hero-portfolio-lg': "url('/heroes/portfolio-lg.jpg')",
				'hero-process': "url('/heroes/process.jpg')",
				'hero-process-lg': "url('/heroes/process-lg.jpg')",
				'hero-bio': "url('/heroes/bio.jpg')",
				'hero-bio-lg': "url('/heroes/bio-lg.jpg')",

				'craftsman': "url('/gallery/craftsman.jpg')",
				'modern': "url('/gallery/modern.jpg')",
				'french-country': "url('/gallery/french-country.jpg')",
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
