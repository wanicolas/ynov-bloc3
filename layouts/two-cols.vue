<template>
	<div class="slidev-layout two-cols slide-container">
		<div v-if="$slots.left" class="header-area mb-4">
			<slot />
		</div>

		<div class="grid grid-cols-2 flex-1 items-start gap-10">
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
