/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@solana/wallet-adapter-react-ui/styles.css",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        cA: '#97e92e',
        cB: '#1e5324',
        cC: 'white',
        cD: '#bbf7d0',
      }
    },
  },
  plugins: [],
}