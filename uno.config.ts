import {
	defineConfig,
	presetIcons,
	presetTypography,
	presetWind4,
	transformerDirectives,
} from "unocss"

export default defineConfig({
	presets: [presetWind4(), presetIcons(), presetTypography()],
	transformers: [transformerDirectives()],
	theme: {
		fontFamily: {
			sans: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
			mono: "JetBrains Mono, monospace",
		},
	},
	shortcuts: {
		"slide-container": "flex flex-col justify-start h-full",
		"slide-centered":
			"flex flex-col items-center justify-center h-full text-center",
	},
})
