<template>
  <div class="bg-white w-full flex text-center justify-center">
    <div class="my-16 w-8/12">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Page not found!</h1>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import {onMounted} from "vue";

onMounted(() => {
  document.title = 'Not Found | Generated Notion Forms'
})
</script>
