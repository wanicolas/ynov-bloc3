<script setup lang="ts">
const presenterText = 'Nicolas WALTER - Ynov Strasbourg - 19 juin 2026'
const websiteText = 'nicolaswalter.fr'
</script>

<template>
	<footer
		v-if="!$frontmatter?.hideFooter"
		class="absolute bottom-0 left-0 right-0 z-10 bg-surface px-12 pb-3 pt-1"
	>
		<div class="footer-line" />
		<div class="flex items-center justify-between footer-text">
			<!-- Left: Presenter - School - Date -->
			<div>
				{{ presenterText }}
			</div>

			<!-- Right: Dynamic -->
			<div>
				<div v-if="$nav.currentLayout === 'end'" class="flex items-center gap-1.5 text-primary">
					<span class="font-normal">{{ websiteText }}</span>
					<img src="/logo_perso.svg" alt="Nicolas Walter" class="inline-block h-3.5 w-auto">
				</div>
				<div v-else-if="$nav.currentLayout === 'cover'" />
				<div v-else class="text-primary font-normal">
					{{ $nav.currentPage }}
				</div>
			</div>
		</div>
	</footer>
</template>
