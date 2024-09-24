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
      textShadow: {
        'md': '2px 2px 0 rgba(0, 0, 0, 0.5), -2px -2px 0 rgba(0, 0, 0, 0.5)',
      },
      screens: {
        'xs': '375px',
      },
      colors: {
        cA: '#f7d666',
        cB: '#078dfa',
        cC: 'white',
        cD: '#f7df66',
      }
    },
  },
  plugins: [],
}
