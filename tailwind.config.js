/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      ['editorial']: ['var(--font-editorial)'],
      ['mondwest']: ['var(--font-mondwest)'],
      ['montreal']: ['var(--font-montreal)'],
    },
    extend: {
    },
    colors: {
      ink: '#000',
      reverse: '#fff',
      purple: '#ACACEF',
      borderColor: '#202029',
      transparent: 'transparent',
    },
  },

}
