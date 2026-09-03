<template>
	<div class="slidev-layout two-cols slide-container">
		<div v-if="$slots.left" class="header-area mb-4">
			<slot />
		</div>

		<div class="flex-1 gap-10 grid grid-cols-2 items-start">
			<div class="col-left">
				<slot v-if="$slots.left" name="left" />
				<slot v-else />
			</div>
			<div class="col-right">
				<slot name="right" />
			</div>
		</div>
	</div>
</template>
