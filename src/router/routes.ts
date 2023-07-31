import {RouteRecordRaw} from "vue-router";
import Home from "../pages/Home.vue";
import PrivacyPolicy from "../pages/PrivacyPolicy.vue";
import TermsOfUse from "../pages/TermsOfUse.vue";
import Contact from "../pages/Contact.vue";

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/privacy-policy',
        name: 'Privacy policy',
        component: PrivacyPolicy,
    },
    {
        path: '/terms-of-use',
        name: 'Terms of use',
        component: TermsOfUse,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
];