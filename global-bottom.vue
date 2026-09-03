<script setup lang="ts">
// Permet de surcharger via frontmatter par slide si besoin
const presenterText = 'Nicolas WALTER - Ynov Strasbourg - 19 juin 2026'
const websiteText = 'nicolaswalter.fr'
</script>

<template>
	<footer
		v-if="!$frontmatter?.hideFooter"
		class="absolute bottom-0 left-0 right-0 z-10 bg-white px-12 pb-3 pt-1"
	>
		<div class="mb-2 w-full border-t border-[#e5e5e5]" />
		<div
			class="flex items-center justify-between text-[11px] text-[#777777] tracking-wide font-sans"
		>
			<!-- Left: Presenter - School - Date -->
			<div>
				{{ presenterText }}
			</div>

			<!-- Right: Dynamic (Website on end slide, blank on cover, page number on others) -->
			<div>
				<div
					v-if="$nav.currentLayout === 'end'"
					class="flex items-center gap-1.5 text-[#000000]"
				>
					<span class="font-normal">{{ websiteText }}</span>
					<img
						src="/logo_perso.svg"
						alt="Nicolas Walter"
						class="inline-block h-3.5 w-auto"
					>
				</div>
				<div v-else-if="$nav.currentLayout === 'cover'" />
				<div v-else class="text-[#000000] font-normal">
					{{ $nav.currentPage }}
				</div>
			</div>
		</div>
	</footer>
</template>
