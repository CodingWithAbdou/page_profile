export default {
    content: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['Open Sans', 'sans-serif'],
            },
            alias: {
                '@': '/src',
            },
        },
    },
    plugins: [],
};
