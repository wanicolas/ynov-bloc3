import {
	defineConfig,
	presetIcons,
	presetTypography,
	presetWind4,
} from 'unocss'

export default defineConfig({
	presets: [presetWind4(), presetIcons(), presetTypography()],
	theme: {
		fontFamily: {
			sans: 'Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
			mono: 'JetBrains Mono, monospace',
		},
	},
	shortcuts: {
		'slide-container': 'flex flex-col justify-start h-full',
		'slide-centered':
			'flex flex-col items-center justify-center h-full text-center',
		'title-hero': 'text-5xl font-medium tracking-tight leading-tight',
		'title-slide': 'text-3xl font-medium tracking-tight mb-8 leading-tight',
		'subtitle-slide': 'text-lg text-muted font-normal leading-relaxed',
	},
})
