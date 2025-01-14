Copy/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Add src if you use it
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}"  // Add layouts if you use them
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          900: '#1e40af',
          800: '#1e3a8a',
          50: '#eff6ff'
        }
      },
      animation: {
        'scroll': 'scrollAnimation 20s linear infinite'
      },
      keyframes: {
        scrollAnimation: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    },
  },
  plugins: [],
}
