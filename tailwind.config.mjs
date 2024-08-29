/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"bg": "var(--color-bg)",
				"bg-hover": "var(--color-bg-hover)",
				"primary": "var(--color-primary)",
				"secondary": "var(--color-secondary)",
				"accent": "var(--color-accent)",
				"accent-hover": "var(--color-accent-hover)",
				"accent-pressed": "var(--color-accent-pressed)",
				"surface": "var(--color-surface)",
				"text": "var(--color-text)",
			},
			fontFamily: {
				"sans": "monospace",
			}
		},
	},
	plugins: [],
}