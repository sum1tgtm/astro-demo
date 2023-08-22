/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				red: {
					shade1: "#f21948",
					shade2: "#d81842",
					shade3: '#a5223e',
				},
				bgColor: {
					shade1: "#fbfaff"
				}
			},
			fontFamily: {
				sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans]
			}
		},
		container: {
			center: true,
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			// '2xl': '1536px' // not putting this will remove 1536px container max-width
			// '3xl': '1920px' // to add 3xl
		},
		// this replaces all colors to add colors use extend
		// colors: {
		// 	red: {
		// 		DEFAULT: "#f21948",
		// 		shade1: "#d81842",
		// 		shade2: '#a5223e',
		// 	}
		// }

	},
	plugins: [],
}
