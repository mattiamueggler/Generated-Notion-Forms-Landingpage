<template>
  <footer class="bg-white h-24 inset-x-0 bottom-0 py-4">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 lg:px-8">
      <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        <div v-for="item in navigation" :key="item.name" class="pb-6">
          <router-link :to="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</router-link>
        </div>
      </nav>
      <p class="mt-6 text-center text-xs leading-5 text-gray-500">&copy; {{ new Date().getFullYear() }} Generated Notion Forms from <a href="https://mattiamueggler.ch">mattiamueggler.ch.</a> All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped></style>

<script setup lang="ts">
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Privacy policy', href: '/privacy-policy' },
  { name: 'Terms of use', href: '/terms-of-use' },
  { name: 'Contact', href: '/contact' },
]
</script>
