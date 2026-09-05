import antfu from "@antfu/eslint-config"

export default antfu({
	unocss: true,
	vue: true,
	typescript: true,
	stylistic: {
		indent: "tab",
		quotes: "double",
	},
	formatters: {
		css: true,
	},
	ignores: [
		"slides.md",
		"pages/**",
		"pnpm-workspace.yaml",
	],
})
