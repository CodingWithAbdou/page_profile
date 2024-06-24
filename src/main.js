import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ar from './locales/ar.json';
import en from './locales/en.json';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    locale: 'ar',
    fallbackLocale: 'ar',
    messages: { en, ar },
});
createApp(App).use(router).use(i18n).mount('#app');
AOS.init({});
// i18n;
