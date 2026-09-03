<template>
  <div class="slidev-layout two-cols flex flex-col justify-start h-full bg-white">
    <!-- Si slot "left" fourni, le default slot sert de header -->
    <div v-if="$slots.left" class="header-area mb-4">
      <slot />
    </div>

    <div class="grid grid-cols-2 gap-10 flex-1 items-start">
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

:deep(h2) {
  font-size: 1.6rem;
  font-weight: 500;
  color: #000000;
  margin-top: 0;
  margin-bottom: 1rem;
}
</style>
