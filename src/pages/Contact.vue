<template>
  <div class="bg-white w-full flex text-center justify-center">
    <div class="my-16 w-8/12">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact</h1>
      <div class="mt-8 w-full text-center">
        <a href="mailto:hi@mattiamueggler.ch">hi@mattiamueggler.ch</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import {onMounted} from "vue";

onMounted(() => {
  document.title = 'Contact | Generated Notion Forms'
})
</script>
