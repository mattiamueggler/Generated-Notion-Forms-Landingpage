<template>
    <router-view></router-view>
    <Footer></Footer>
</template>

<style scoped></style>

<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Plausible from 'plausible-tracker'

const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN
const plausibleHost = import.meta.env.VITE_PLAUSIBLE_HOST

if (plausibleDomain == "" || plausibleHost == "") {
  console.log(plausibleDomain)
  console.log(plausibleHost)
  throw new Error('Plausible could not be initialized!');
}

const { trackPageview } = Plausible({
  apiHost: plausibleHost,
  domain: plausibleDomain,
  trackLocalhost: true,
})
trackPageview()
</script>
