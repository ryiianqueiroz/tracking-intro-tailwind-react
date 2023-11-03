/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1040px'},
      // => @media (max-width: 1040px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'sm': {'max': '395px'},
      // => @media (max-width: 395px) { ... }
    }
  },
  plugins: [],
}

