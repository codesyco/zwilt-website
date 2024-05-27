/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'parallelogram': 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
        'parallelogram-md': 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)',
        'parallelogram-lg': 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)',
      },
      before: ['hover'],
    },
  },
  plugins: [],
}