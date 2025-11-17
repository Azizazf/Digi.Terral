/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx,}",
        "./components/**/*.{js,ts,jsx,tsx,}",
  ],
  theme: {
      extend: {
            colors: {
                primary: '#2A5C82',
                secondary: '#4CAF50',
                accent: '#FF6B35',
                light: '#F5F5F5',
                dark: '#333333',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui ', 'sans-serif'],
            },
        },
    
  },
  plugins: [],
}

