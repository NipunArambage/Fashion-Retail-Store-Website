/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#667eea',
          600: '#764ba2',
        }
      },
      animation: {
        'slideIn': 'slideIn 0.3s ease-out',
        'fadeIn': 'fadeIn 0.3s ease-out',
        'expandSearch': 'expandSearch 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'float-delay-1': 'float 3s ease-in-out 0.5s infinite',
        'float-delay-2': 'float 3s ease-in-out 1s infinite',
        'float-delay-3': 'float 3s ease-in-out 1.5s infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        expandSearch: {
          '0%': { opacity: '0', width: '0' },
          '100%': { opacity: '1', width: '350px' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

