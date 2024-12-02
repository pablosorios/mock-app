/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class',
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			'tablet': '641px',
			'desktop': '1024px',
		},
		extend: {
			colors: {
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: 'hsl(var(--primary) / <alpha-value>)',
				secondary: 'hsl(var(--secondary) / <alpha-value>)',
				tertiary: 'hsl(var(--tertiary) / <alpha-value>)',
				text: 'hsl(var(--text) / <alpha-value>)',
				side: 'hsl(var(--side) / <alpha-value>)',
				filler: 'hsl(var(--filler) / <alpha-value>)',
				border: 'hsl(var(--border) / <alpha-value>)',
				blue: 'hsl(var(--blue) / <alpha-value>)',
				purple: 'hsl(var(--purple) / <alpha-value>)',
				red: 'hsl(var(--red) / <alpha-value>)',
				yellow: 'hsl(var(--yellow) / <alpha-value>)',
				green: 'hsl(var(--green) / <alpha-value>)',
				shadow: 'hsl(var(--shadow) / <alpha-value>)',
				icon: 'hsl(var(--icon) / <alpha-value>)',
				filling: 'hsl(var(--filling) / <alpha-value>)',
			},
		},
	},
}