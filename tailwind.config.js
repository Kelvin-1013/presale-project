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
        cA: '#e8963a',
        cB: '#e83838',
        cC: 'white',
        cD: '#fcba03',
    }},
  },
  plugins: [],
}