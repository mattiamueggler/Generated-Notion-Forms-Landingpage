<template>
  <div class="bg-white w-screen flex justify-center">
    <div class="px-6 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-16 pb-36 sm:pb-64 md:pb-64 lg:pb-64">
      <div class="mx-auto w-full text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span>create </span>
          <span class="text-blue-700">Generated Notion Forms</span>
          <br/>
          <span>Coming soon</span>
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          You want to turn your Notion databases into forms automatically. No problem, that's why 'generated notion forms' is developed with many more very useful features. Don't worry, we will release as soon as possible with a free subscription or a very good offer.
        </p>
      </div>
      <div class="mx-auto w-full mt-16">
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Stay informed</label>
        <div class="mt-2 flex flex-row">
          <div class="w-10/12">
            <input type="email" name="email" v-model="email" id="email" class="w-full md:h-10 sm:h-8 h-8 block rounded-md border-0  pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="you@example.com" />
            <p
                v-if="showInvalidEmail"
                class="mt-2 text-sm text-red-600" id="email-error">
              Not a valid email address.
            </p>
          </div>
          <button @click="sendMail()" class="w-2/12 md:h-10 sm:h-8 h-8 ml-2 md:ml-4 sm:ml-4 rounded-md active:bg-indigo-600 bg-indigo-600 px-2.5 py-0.5 md:px-3.5 sm:px-1.5 md:py-2.5 sm:py-0.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
        </div>
      </div>
    </div>
  </div>
  <Notification
      :type="showNotification"
      :title="notificationTitle"
      :text="notificationText"
  ></Notification>
</template>

<style scoped></style>

<script setup lang="ts">
import Notification from "../components/Notification.vue";
import {onMounted, Ref, ref} from "vue";

type notificationType = 'success' | 'error' | '';

const mgApiUrl = import.meta.env.VITE_API_URL
const mgProxyKey = import.meta.env.VITE_API_KEY
const mgToMail = import.meta.env.VITE_TO_MAIL
const showInvalidEmail = ref(false);
let email = "";

const showNotification: Ref<notificationType> = ref("");
const notificationTitle = ref("");
const notificationText = ref("");

onMounted(() => {
  document.title = 'Home | Generated Notion Forms'
})

async function sendMail() {
  if (!isValidEmail(email)) {
    showInvalidEmail.value = true
    return
  }
  showInvalidEmail.value = false

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('X-API-Key', mgProxyKey);

  const response = await fetch(mgApiUrl, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify({
      to: mgToMail,
      subject: "GNF: New person registered",
      body: `Hi,\n\nA new person has registered with the email: ${email} add this person to the list. \n\nFriendly greetings\nMattia from generated Notion forms`,
    }),
  });

  if (response.ok) {
    showNotification.value = "success"
    notificationTitle.value = "Successfully registered"
    notificationText.value = "You have been successfully added to the list."
    return
  }
  showNotification.value = "error"
  notificationTitle.value = "Failed to register"
  notificationText.value = "An error has occurred. Please send an email to hi@mattiamueggler.ch. We apologize for the inconvenience. t."
}

function isValidEmail(email: string): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

</script>
