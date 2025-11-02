/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monigue': ['Monigue', 'sans-serif'],
        'typologic': ['Typologic', 'sans-serif'],
        'sf-pro-display': ['SF Pro Display', 'sans-serif'],
      },
      keyframes: {
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
      },
      animation: {
        bounceOnce: 'bounceOnce 0.6s ease-in-out 1',
      },
      colors: {
        'primary': "#5b1219",
        "secondary": "#f3683f",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('/images/collection-background.svg')",
        'card': "url('/images/thumbnail-background.svg')",
      },
    },
  },
  plugins: [],
}

export default config;