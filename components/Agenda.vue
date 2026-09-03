<script setup lang="ts">
import { computed } from 'vue'

interface AgendaItem {
	number?: string
	title: string
}

const props = defineProps<{
	items?: (string | AgendaItem)[]
}>()

const normalizedItems = computed(() => {
	if (!props.items)
		return []
	return props.items.map((item, idx) => {
		if (typeof item === 'string') {
			return {
				number: String(idx + 1).padStart(2, '0'),
				title: item,
			}
		}
		return {
			number: item.number || String(idx + 1).padStart(2, '0'),
			title: item.title,
		}
	})
})

const gridClass = computed(() => {
	const count = normalizedItems.value.length
	if (count <= 2)
		return 'grid-cols-2'
	if (count === 3)
		return 'grid-cols-3'
	if (count === 4)
		return 'grid-cols-4'
	return 'grid-cols-3'
})
</script>

<template>
	<div class="text-center gap-8 grid w-full" :class="gridClass">
		<div
			v-for="(item, index) in normalizedItems"
			:key="index"
			class="flex flex-col items-center justify-start"
		>
			<div class="text-6xl text-primary tracking-tight font-medium mb-4">
				{{ item.number }}
			</div>
			<div class="text-xl text-primary leading-snug font-normal max-w-xs">
				{{ item.title }}
			</div>
		</div>
	</div>
</template>
