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
			}
		},
		colors: {
			primary: colors.sky,
			secondary: colors.emerald,
			base: colors.slate,
		},
	},
	plugins: [
		require('flowbite/plugin'),
	],
}
