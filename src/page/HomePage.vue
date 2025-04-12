<template>
    <main class="mx-auto mb-14 w-full max-w-screen-sm flex-1 px-4 pb-32 pt-16 dark:text-white overflow-hidden">
        <div class="flex justify-between">
            <div class="flex gap-5 items-center" data-aos-duration="500" data-aos="fade-up">
                <img class="rounded-full shadow-md" loading="lazy" width="100" height="100" src="../assets/nice.jpg" alt="" />
                <div class="">
                    <h1 class="font-semibold text-lg mb-2 text-neutral-700">{{ $t('main.full_name') }}</h1>
                    <h3 class="font-noraml text-neutral-800">{{ $t('main.job_name') }}</h3>
                    <span class="text-sm text-neutral-800">{{ $t('main.address') }}</span>
                </div>
            </div>
        </div>

        <div class="mt-16" data-aos-duration="700" data-aos="fade-up">
            <h3 class="font-semibold mb-4 text-lg text-neutral-700" style="margin-top: 300px">{{ $t('main.about_title') }}</h3>
        </div>
        <div class="flex flex-col gap-[1px] text-neutral-800">
            <p data-aos-duration="900" data-aos="fade-up">{{ $t('main.about_one') }}</p>
            <p data-aos-duration="1000" data-aos="fade-up">{{ $t('main.about_two') }}</p>
            <p data-aos-duration="1100" data-aos="fade-up">{{ $t('main.about_three') }}</p>
        </div>

        <div class="mt-16" data-aos-duration="1000" data-aos="fade-up">
            <h3 class="font-semibold mb-4 text-lg text-neutral-700">{{ $t('main.connect_title') }}</h3>
        </div>

        <div class="flex flex-col gap-[1px] text-neutral-800">
            <div class="flex gap-1" data-aos-duration="1000" data-aos="fade-up">
                <span>{{ $t('main.connect_one') }}</span>
                <a target="_blank" class="link" href="https://www.linkedin.com/in/khladi-mohamed-abdelhamid/">
                    <span><img class="w-7" src="../assets/linkedin.png" width="300" loading="lazy" alt="" /> </span> <span>{{ $t('main.linkedin') }}</span>
                </a>
            </div>

            <div class="flex gap-1" data-aos-duration="1050" data-aos="fade-up">
                <span>{{ $t('main.connect_two') }}</span>
                <a target="_blank" class="link" href="https://github.com/CodingWithAbdou"
                    ><span><img class="w-4" src="../assets/github.png" width="300" loading="lazy" alt="github" /> </span>
                    <span>{{ $t('main.github') }}</span></a
                >
            </div>

            <div class="flex gap-1" data-aos-duration="1100" data-aos="fade-up">
                <span>{{ $t('main.connect_four') }}</span>
                <a target="_blank" class="link" href="https://mostaql.com/u/abdou_khaldi"
                    ><span><img class="w-4" src="../assets/mostaql.png" width="300" loading="lazy" alt="mostaql" /> </span>
                    <span>{{ $t('main.mostaql') }}</span></a
                >
            </div>

            <div class="flex gap-1" data-aos-duration="1150" data-aos="fade-up">
                <span>{{ $t('main.connect_five') }}</span>
                <a target="_blank" class="link" href="https://khamsat.com/user/khaldi_abdou"
                    ><span><img class="w-3" src="../assets/khamsat.png" width="300" loading="lazy" alt="khamsat" /> </span>
                    <span>{{ $t('main.khamsat') }}</span></a
                >
            </div>

            <div class="flex gap-1" data-aos-duration="1200" data-aos="fade-up">
                <span>{{ $t('main.connect_three') }}</span>
                <div class="relative hover:underline">
                    <span
                        :class="{ hidden: !tooltip }"
                        class="text-xs w-[80px] cursor-default text-center rounded-lg text-neutral-500 border bg-gray-50 py-1 absolute z-10 top-[-28px] left-2/4 -translate-x-1/2 transition duration-300">
                        <span v-if="textCopied">
                            {{ $t('main.copied') }}
                        </span>
                        <span v-else> {{ $t('main.Click_to_copy') }} </span>
                    </span>
                    <span
                        @mouseover="tooltip = true"
                        @mouseleave="
                            tooltip = false;
                            textCopied = false;
                        "
                        @click="copyToClipboard('contact@khaldiabdou.com')"
                        class="cursor-pointer flex items-center justify-center gap-1">
                        <span><img class="w-4" src="../assets/mail.png" width="300" loading="lazy" alt="gmail" /> </span> <span>contact@khaldiabdou.com</span>
                    </span>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            tooltip: false,
            textCopied: false,
        };
    },

    methods: {
        copyToClipboard(text) {
            navigator.clipboard.writeText(text);
            this.textCopied = true;
        },
    },
};
</script>
