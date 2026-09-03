<template>
  <div class="slidev-layout default flex flex-col justify-start h-full bg-white">
    <slot />
  </div>
</template>

<style scoped>
:deep(h1) {
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #000000;
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1.2;
}
</style>
