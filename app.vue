<template>
  <VueLenis
    root
    :autoRaf="true"
    :options="{
      wheelMultiplier: 0.75,
      smoothWheel: true,
      lerp: 0.1,
      duration: 1.2,
    }"
  >
    <NuxtPage />
  </VueLenis>
</template>

<script setup lang="ts">
import { useLenis, VueLenis } from "lenis/vue";
</script>
