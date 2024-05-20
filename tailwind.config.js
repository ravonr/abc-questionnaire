/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      ['lack']: ['var(--font-lack)'],
      ['baroque']: ['var(--font-baroque)'],
    },
    extend: {
    },
    colors: {
      ink: '#000',
      reverse: '#fff',
      purple: '#ACACEF',
      borderColor: '#202029',
    },
  },

}
