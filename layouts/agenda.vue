<template>
	<div class="slidev-layout agenda h-full flex flex-col justify-start bg-white">
		<div class="agenda-content flex flex-1 flex-col justify-center">
			<slot />
		</div>
	</div>
</template>

<style scoped>
:deep(h1) {
	font-size: 2.6rem;
	font-weight: 500;
	letter-spacing: -0.02em;
	color: #000000;
	text-align: center;
	margin-top: 0;
	margin-bottom: 4rem;
}
</style>
