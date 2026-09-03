<template>
  <div class="slidev-layout end flex flex-col items-center justify-center h-full text-center bg-white">
    <div class="max-w-4xl px-4 flex flex-col items-center justify-center">
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
