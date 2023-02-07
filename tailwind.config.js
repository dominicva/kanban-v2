/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.81rem',
      md: '0.94rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
    },
    extend: {
      colors: {
        'slate-blue': '#635FC7',
        'tropical-indigo': '#A8A4FF',
        'rich-black': '#000112',
        'raisin-black': '#20212C',
        'raisin-black-lighter': '#2B2C37',
        charcoal: '#3E3F4E',
        'cool-gray': '#828FA3',
        lavender: '#E4EBFA',
        'ghost-white': '#F4F7FD',
        'indian-red': '#EA5555',
        'light-red': '#FF9898',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
