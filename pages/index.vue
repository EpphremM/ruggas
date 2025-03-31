<template>
  <LandingView />
  <div class="w-100vw h-svh">
    <h1 class="font-bold bg-red-500">RUGGAS</h1>
  </div>
</template>

<script lang="ts" setup>
const rellax = useNuxtApp().$rellax;

onBeforeUnmount(() => {
  useNuxtApp().$destroyRellax();
});

onMounted(() => {
  nextTick(() => {
    useNuxtApp().$initRellax(".rellax", {});
  });
});
</script>

<style></style>
