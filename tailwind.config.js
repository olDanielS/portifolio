/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              'white': '#FFF',
              'primaryGreen': '#1ABC9C',
              'alertColor': '#FF5722',
              'sucessColor': '#2ECC71'
          },
          fontFamily: {
            title: ['Roboto', 'sans-serif'],
            alt: ['Roboto', 'sans-serif'],
            subtitle: ['Roboto', 'sans-serif'],
            body: ['Roboto', 'sans-serif'],
            side: ['Londrina Outline', 'sans-serif'],
          },
          backgroundColor: {
            'background': '#121214',
            'bgCard': '#1F1F24',
          },
          
          keyframes: {
            glitch: {
              '0%, 100%': { clip: 'rect(2px, 9999px, 44px, 0)', transform: 'skew(0.02deg)' },
              '10%': { clip: 'rect(56px, 9999px, 46px, 0)', transform: 'skew(0.01deg)' },
              '20%': { clip: 'rect(18px, 9999px, 34px, 0)', transform: 'skew(0.03deg)' },
              '30%': { clip: 'rect(8px, 9999px, 30px, 0)', transform: 'skew(0.02deg)' },
              '40%': { clip: 'rect(76px, 9999px, 56px, 0)', transform: 'skew(0.01deg)' },
              '50%': { clip: 'rect(42px, 9999px, 48px, 0)', transform: 'skew(0.03deg)' },
              '60%': { clip: 'rect(12px, 9999px, 34px, 0)', transform: 'skew(0.02deg)' },
              '70%': { clip: 'rect(68px, 9999px, 38px, 0)', transform: 'skew(0.01deg)' },
              '80%': { clip: 'rect(20px, 9999px, 42px, 0)', transform: 'skew(0.03deg)' },
              '90%': { clip: 'rect(50px, 9999px, 24px, 0)', transform: 'skew(0.02deg)' },
            },
            glitchTop: {
              '0%, 100%': { transform: 'translate(0)' },
              '50%': { transform: 'translate(-5px, -5px)' },
            },
            glitchBottom: {
              '0%, 100%': { transform: 'translate(0)' },
              '50%': { transform: 'translate(5px, 5px)' },
            },
          },
          animation: {
            glitch: 'glitch 1s infinite',
            glitchTop: 'glitchTop 1s linear infinite',
            glitchBottom: 'glitchBottom 1.5s linear infinite',
          },
        
          
    },
  },
  plugins: [],
}

