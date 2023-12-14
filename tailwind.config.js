/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{ts,tsx,js,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    important: '#root',
    theme: {
        extend: {
            colors: {
                lightWhite: 'rgba(255,255,255,0.7)',
            },
            fontFamily: {},
        },
        screens: {
            xs: '320px',
            ss: '620px',
            sm: '768px',
            md: '1020px',
            lg: '1200px',
            xl: '1600px',
        },
    },
    plugins: [],
};
