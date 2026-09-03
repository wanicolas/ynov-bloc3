<template>
	<div
		class="slidev-layout end h-full flex flex-col items-center justify-center bg-white text-center"
	>
		<div class="max-w-4xl flex flex-col items-center justify-center px-4">
			<slot />
		</div>
	</div>
</template>

<style scoped>
:deep(h1) {
	font-size: 3.5rem;
	font-weight: 500;
	letter-spacing: -0.025em;
	line-height: 1.15;
	color: #000000;
	margin-top: 0;
	margin-bottom: 2rem;
}

:deep(p) {
	font-size: 1.5rem;
	font-weight: 400;
	color: #222222;
	margin: 0;
	line-height: 1.4;
}
</style>
