<template>
	<footer
		v-if="!$frontmatter?.hideFooter"
		class="text-sm text-neutral-500 px-3 border-t border-neutral-500 flex items-center bottom-0 left-0 right-0 justify-between absolute z-10"
	>
		<!-- Left: Presenter - School - Date -->
		<div class="py-2">
			Nicolas WALTER - Ynov Strasbourg - 08 septembre 2026
		</div>

		<!-- Right: Dynamic -->
		<a
			v-if="$nav.currentLayout === 'end'"
			href="https://nicolaswalter.fr"
			class="flex gap-2 items-center"
		>
			<span>nicolaswalter.fr</span>
			<img
				src="/logo_perso.svg"
				alt="Nicolas Walter"
				class="h-8 w-auto inline-block"
			>
		</a>
		<div v-else-if="$nav.currentLayout !== 'cover'">
			{{ $nav.currentPage }}
		</div>
	</footer>
</template>
