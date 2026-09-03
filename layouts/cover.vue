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
	<div class="slidev-layout cover relative h-full flex flex-col justify-between bg-surface">
		<!-- Logo Ynov en haut à droite -->
		<div class="absolute right-12 top-8">
			<img
				:src="logo"
				alt="Ynov Campus Strasbourg"
				class="h-11 w-auto object-contain"
			>
		</div>

		<!-- Zone Titre & Sous-titre -->
		<div class="max-w-4xl flex flex-1 flex-col justify-center pt-6">
			<slot />
		</div>
	</div>
</template>
