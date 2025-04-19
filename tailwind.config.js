/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moroccan-dark': 'rgb(var(--moroccan-dark))',
        'moroccan-blue': 'rgb(var(--moroccan-blue))',
        'moroccan-red': 'rgb(var(--moroccan-red))',
        'moroccan-yellow': 'rgb(var(--moroccan-yellow))',
        'moroccan-orange': 'rgb(var(--moroccan-orange))',
        'moroccan-green': 'rgb(var(--moroccan-green))',
        'moroccan-light': 'rgb(var(--moroccan-light))',
        'moroccan-sand': 'rgb(var(--moroccan-sand))',
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
      },
    },
  },
  plugins: [],
};