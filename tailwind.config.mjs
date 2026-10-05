/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E0D0B',
        ink2: '#161410',
        ivory: '#F7F2EA',
        ivory2: '#EFE7D8',
        gold: '#C9A24B',
        goldlight: '#E8CB85',
        marigold: '#E07B24',
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
