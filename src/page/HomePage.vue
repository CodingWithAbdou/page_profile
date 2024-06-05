<template>
    <main class="mx-auto mb-14 w-full max-w-screen-sm flex-1 overflow-x-hidden px-4 pb-8 pt-20 dark:text-white overflow-hidden">
        <div class="flex justify-between">
            <div class="flex gap-5 items-center" data-aos-duration="500" data-aos="fade-up">
                <img class="rounded-full shadow-md" loading="lazy" width="100" height="100" src="../assets/nice.jpg" alt="" />
                <div class="">
                    <h1 class="font-semibold text-lg mb-2 text-neutral-700">{{ $t('main.full_name') }}</h1>
                    <h3 class="font-noraml text-neutral-800">{{ $t('main.job_name') }}</h3>
                    <address class="text-sm text-neutral-800">{{ $t('main.address') }}</address>
                </div>
            </div>
            <div>
                <button v-if="lang === 'ar'" @click="changeLanguage('en')">English</button>
                <button v-if="lang === 'en'" @click="changeLanguage('ar')">عربي</button>
            </div>
        </div>

        <div class="mt-24" data-aos-duration="700" data-aos="fade-up">
            <h3 class="font-semibold mb-4 text-lg text-neutral-700">{{ $t('main.about_title') }}</h3>
        </div>
        <div class="flex flex-col gap-[1px] text-neutral-800">
            <p data-aos-duration="900" data-aos="fade-up">{{ $t('main.about_one') }}</p>
            <p data-aos-duration="1000" data-aos="fade-up">{{ $t('main.about_two') }}</p>
            <p data-aos-duration="1100" data-aos="fade-up">{{ $t('main.about_three') }}</p>
        </div>
        <!-- <div>resolve error</div> -->
    </main>
</template>

<script>
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
