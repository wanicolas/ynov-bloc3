<template>
  <footer
    v-if="!$frontmatter?.hideFooter"
    class="absolute bottom-0 left-0 right-0 px-12 pb-3 pt-1 z-10 bg-white"
  >
    <div class="w-full border-t border-[#e5e5e5] mb-2"></div>
    <div class="flex items-center justify-between text-[11px] text-[#777777] font-sans tracking-wide">
      <!-- Left: Presenter - School - Date -->
      <div>
        {{ presenterText }}
      </div>

      <!-- Right: Dynamic (Website on end slide, blank on cover, page number on others) -->
      <div>
        <div v-if="$nav.currentLayout === 'end'" class="flex items-center gap-1.5 text-[#000000]">
          <span class="font-normal">{{ websiteText }}</span>
          <img src="/logo_perso.svg" alt="Nicolas Walter" class="h-3.5 w-auto inline-block" />
        </div>
        <div v-else-if="$nav.currentLayout === 'cover'"></div>
        <div v-else class="text-[#000000] font-normal">
          {{ $nav.currentPage }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Permet de surcharger via frontmatter par slide si besoin
const presenterText = 'Nicolas WALTER - Ynov Strasbourg - 19 juin 2026'
const websiteText = 'nicolaswalter.fr'
</script>
