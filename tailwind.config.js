/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        extend: {
            screens: {
                xs: '375px',
                ms: '700px',
            },
            backgroundImage: {
                busan: "url('/images/busan-background.jpg')",
            },
        },
    },
    plugins: [],
}
