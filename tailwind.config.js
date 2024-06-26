export default {
    content: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {},
            alias: {
                '@': '/src',
            },
        },
    },
    plugins: [],
};
