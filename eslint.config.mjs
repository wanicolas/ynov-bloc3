import antfu from '@antfu/eslint-config'

export default antfu({
	unocss: true,
	vue: true,
	typescript: true,
	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},
	ignores: [
		'dist/**',
		'node_modules/**',
		'slides.md',
		'pages/**/*.md',
		'consignes/**',
		'pnpm-workspace.yaml',
	],
})
