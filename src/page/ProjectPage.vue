<template>
    <main class="mx-auto mb-14 w-full max-w-screen-sm flex-1 overflow-x-hidden px-4 pb-8 pt-32 dark:text-white overflow-hidden">
        <div
            data-aos-duration="700"
            data-aos="fade-up"
            class="flex items-center p-4 mb-4 text-sm text-teal-500 border border-teal-500 rounded-lg bg-transparent dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
            role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only"></span>
            {{ $t('main.soon') }}
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>
