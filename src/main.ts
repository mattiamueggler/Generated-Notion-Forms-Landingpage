import { createApp } from 'vue'
import './index.css'
import { router } from './router';
import App from './App.vue'
import Plausible from 'plausible-tracker'

const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN
const plausibleHost = import.meta.env.VITE_PLAUSIBLE_HOST

if (plausibleDomain == "" || plausibleHost == "") {
    throw new Error('Plausible could not be initialized!');
}

const { trackPageview } = Plausible({
    apiHost: plausibleHost,
    domain: plausibleDomain,
    trackLocalhost: true,
})
trackPageview()

const app = createApp(App);
app.use(router);
app.mount('#app');
