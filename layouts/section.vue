<template>
	<div
		class="slidev-layout section h-full flex flex-col items-center justify-center bg-white text-center"
	>
		<div class="max-w-4xl px-4">
			<slot />
		</div>
	</div>
</template>

<style scoped>
:deep(h1) {
	font-size: 3.5rem;
	font-weight: 500;
	letter-spacing: -0.025em;
	color: #000000;
	margin: 0;
	line-height: 1.2;
}

:deep(p) {
	font-size: 1.3rem;
	font-weight: 400;
	color: #555555;
	margin-top: 1rem;
}
</style>
