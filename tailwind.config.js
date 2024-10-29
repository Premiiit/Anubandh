/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-left': 'slideLeft 1s ease-out',
        'slide-right': 'slideRight 1s ease-out',
        'bounce-hover': 'bounceTwice 0.6s ease-in-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-50%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(50%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        bounceTwice: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(-5px)' },
        },
      },
      colors: {
        customBlue: '#0d2347',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}