/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E0D0B',
        ink2: '#161410',
        ivory: '#FAF6EE',
        ivory2: '#F0E9D6',
        gold: '#C9A24B',
        goldlight: '#F0DDA6',
        marigold: '#A87F2E',
        sage: '#5B6B5A',
        sagesoft: '#E8ECE3',
        brick: '#B3402A',
        char: '#241E1A',
        taupe: '#8A7D6B'
      },
      fontFamily: {
        serif: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
