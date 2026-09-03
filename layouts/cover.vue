<template>
  <div class="slidev-layout cover relative flex flex-col justify-between h-full bg-white">
    <!-- Top-Right School Logo -->
    <div class="absolute top-8 right-12">
      <img
        :src="logo"
        alt="Ynov Campus Strasbourg"
        class="h-11 w-auto object-contain"
      />
    </div>

    <!-- Main Title & Subtitle Block -->
    <div class="flex-1 flex flex-col justify-center max-w-4xl pt-6">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    logo?: string
  }>(),
  {
    logo: '/YNOV_STRASBOURG_NOIR.svg',
  }
)
</script>

<style scoped>
:deep(h1) {
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: #000000;
  margin-bottom: 2rem;
}

:deep(p) {
  font-size: 1.25rem;
  font-weight: 400;
  color: #111111;
  margin: 0;
  line-height: 1.4;
}
</style>
