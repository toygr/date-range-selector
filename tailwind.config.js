/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    purge: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './node_modules/range-selector/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}