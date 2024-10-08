/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: '#f3f3ee',
        secondary: '#686863',
        general: '#193a40',
        },
    },
  },
  plugins: [],
}

