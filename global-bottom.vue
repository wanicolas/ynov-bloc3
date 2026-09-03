<script setup lang="ts">
const presenterText = 'Nicolas WALTER - Ynov Strasbourg - 19 juin 2026'
const websiteText = 'nicolaswalter.fr'
</script>

<template>
	<footer
		v-if="!$frontmatter?.hideFooter"
		class="px-12 pb-3 pt-1 bg-surface bottom-0 left-0 right-0 absolute z-10"
	>
		<div class="footer-line" />
		<div class="footer-text flex items-center justify-between">
			<!-- Left: Presenter - School - Date -->
			<div>
				{{ presenterText }}
			</div>

			<!-- Right: Dynamic -->
			<div>
				<div v-if="$nav.currentLayout === 'end'" class="text-primary flex gap-1.5 items-center">
					<span class="font-normal">{{ websiteText }}</span>
					<img src="/logo_perso.svg" alt="Nicolas Walter" class="h-3.5 w-auto inline-block">
				</div>
				<div v-else-if="$nav.currentLayout === 'cover'" />
				<div v-else class="text-primary font-normal">
					{{ $nav.currentPage }}
				</div>
			</div>
		</div>
	</footer>
</template>
