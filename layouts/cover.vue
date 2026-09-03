<script setup lang="ts">
withDefaults(
	defineProps<{
		logo?: string
	}>(),
	{
		logo: '/YNOV_STRASBOURG_NOIR.svg',
	},
)
</script>

<template>
	<div class="slidev-layout cover bg-surface flex flex-col h-full justify-between relative">
		<!-- Logo Ynov en haut à droite -->
		<div class="right-12 top-8 absolute">
			<img
				:src="logo"
				alt="Ynov Campus Strasbourg"
				class="h-11 w-auto object-contain"
			>
		</div>

		<!-- Zone Titre & Sous-titre -->
		<div class="pt-6 flex flex-1 flex-col max-w-4xl justify-center">
			<slot />
		</div>
	</div>
</template>
