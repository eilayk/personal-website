/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"bg": "#1a1a1a",
				"bg-hover": "#333333",
				"primary": "#f0f0f0",
				"secondary": "#ff6b6b",
				"accent": "#ff6b6b",
				"accent-hover": "#ff4f4f",
				"accent-pressed": "#ff3333",
				"surface": "#333333",
				"text": "#f0f0f0",
			},
			fontFamily: {
				"sans": "monospace",
			}
		},
	},
	plugins: [],
}
