import type {
	ClicksContext,
	Frontmatter,
	NavOperations,
	RenderContext,
	SlidevConfig,
} from '@slidev/types'

export type SlidevNav = NavOperations & {
	currentLayout: string
	currentPage: number
	total: number
	isPresenter: boolean
}

declare module 'vue' {
	interface ComponentCustomProperties {
		$slidev: {
			configs: SlidevConfig
			nav: SlidevNav
			[key: string]: any
		}
		$nav: SlidevNav
		$frontmatter: Frontmatter & Record<string, any>
		$page: number
		$clicks: number
		$clicksContext: ClicksContext
		$renderContext: RenderContext
	}
}

export {}
