import { defineConfig, presetIcons, presetTypography, presetUno } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetTypography(),
	],
	theme: {
		colors: {
			'primary': '#000000',
			'surface': '#ffffff',
			'muted': '#666666',
			'subtle': '#888888',
			'border': '#e5e5e5',
			'border-strong': '#000000',
			'dark': '#111111',
		},
		fontFamily: {
			sans: 'Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
			mono: 'JetBrains Mono, monospace',
		},
	},
	shortcuts: {
		'slide-container': 'flex flex-col justify-start h-full bg-surface',
		'slide-centered': 'flex flex-col items-center justify-center h-full text-center bg-surface',
		'title-hero': 'text-5xl font-medium tracking-tight text-primary leading-tight',
		'title-slide': 'text-3xl font-medium tracking-tight text-primary mb-8 leading-tight',
		'subtitle-slide': 'text-lg text-muted font-normal leading-relaxed',
		'footer-line': 'w-full border-t border-border mb-2',
		'footer-text': 'text-[11px] text-subtle font-sans tracking-wide',
	},
})
