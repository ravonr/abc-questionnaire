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
      ['andale']: ['var(--font-andale)'],
    },
    extend: {
    },
    colors: {
      ink: '#000',
      reverse: '#fff',
      purple: '#ACACEF',
      borderColor: '#202029',
      headlineColor: '#161617',
      transparent: 'transparent',
    },
  },

}
