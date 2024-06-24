<template>
    <div>
        <BackgroundDesgin />
        <div class="flex flex-col z-[99] fixed bottom-2 left-2/4 -translate-x-2/4">
            <div class="border border-neutral-300 bg-neutral-100 flex gap-1 py-2 px-12 rounded-2xl shadow-2xl">
                <div @click="$router.push({ name: 'home' })" class="group relative cursor-pointer">
                    <div
                        class="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200"
                        :class="{ 'bg-gray-100 ': $route.name === 'home' }">
                        <img class="w-5 hover:text-blue-500" loading="lazy" src="./assets/home.svg" width="50" alt="" />
                    </div>
                    <span
                        class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-top scale-0 rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium shadow-md transition-all duration-200 ease-in-out group-hover:scale-100">
                        {{ $t('main.home') }}
                    </span>
                </div>
                <div @click="$router.push({ name: 'projects' })" class="group relative cursor-pointer">
                    <div
                        class="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200"
                        :class="{ 'bg-gray-100 ': $route.name === 'projects' }">
                        <img class="w-5 hover:text-blue-500" loading="lazy" src="./assets/project.png" width="50" alt="" />
                    </div>
                    <span
                        class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-top scale-0 rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        {{ $t('main.project') }}
                    </span>
                </div>
                <a href="assets/cv.pdf" target="_self" download="assets/cv.pdf" class="group relative cursor-pointer">
                    <div class="flex h-8 w-8 items-center justify-center rounded-full">
                        <img class="w-5 hover:text-blue-500" loading="lazy" src="./assets/download.png" width="50" alt="" />
                    </div>
                    <span
                        class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-top scale-0 rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        {{ $t('main.cv') }}
                    </span>
                </a>
                <button v-if="lang === 'ar'" @click="changeLanguage('en')" class="group relative cursor-pointer">
                    <div class="flex h-8 w-8 items-center justify-center rounded-full">
                        <img class="w-5 hover:text-blue-500" loading="lazy" src="./assets/arabic.png" width="50" alt="" />
                    </div>
                    <span
                        class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-top scale-0 rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        English
                    </span>
                </button>
                <button v-else @click="changeLanguage('ar')" class="group relative cursor-pointer">
                    <div class="flex h-8 w-8 items-center justify-center rounded-full">
                        <img class="w-5 hover:text-blue-500" loading="lazy" src="./assets/arabic.png" width="50" alt="" />
                    </div>
                    <span
                        class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-top scale-0 rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        عربي
                    </span>
                </button>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import BackgroundDesgin from './components/BackgroundDesgin.vue';
export default {
    data() {
        return {
            lang: 'en',
        };
    },
    mounted() {
        const savedLang = localStorage.getItem('lang');
        if (savedLang) {
            this.lang = savedLang;
            this.changeLanguage(savedLang);
        }
    },
    methods: {
        changeLanguage(lang) {
            this.lang = lang;
            this.$i18n.locale = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            // Save the selected language to storage
            localStorage.setItem('lang', lang);
        },
    },
};
</script>
