/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        brutal: {
          white: '#FFFFFF',
          black: '#000000',
          yellow: '#FFD700',
          'yellow-light': '#FFF8DC',
          cyan: '#00CED1',
          green: '#00C853',
          purple: '#9C27B0',
          rose: '#FF4081',
          gray: '#F5F5F5',
          'dark-bg': '#1A1A1A',
          'dark-card': '#2A2A2A',
          'dark-border': '#444444',
          'dark-text': '#E0E0E0',
        }
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-sm': '2px 2px 0px 0px #000000',
        'brutal-lg': '6px 6px 0px 0px #000000',
        'brutal-yellow': '4px 4px 0px 0px #FFD700',
        'brutal-hover': '6px 6px 0px 0px #000000',
        'brutal-active': '2px 2px 0px 0px #000000',
        // Dark mode shadows
        'brutal-dark': '4px 4px 0px 0px #FFD700',
        'brutal-dark-sm': '2px 2px 0px 0px #FFD700',
        'brutal-dark-lg': '6px 6px 0px 0px #FFD700',
        'brutal-dark-hover': '6px 6px 0px 0px #FFD700',
      },
      borderWidth: {
        '3': '3px',
      },
      translate: {
        'brutal': '4px',
        'brutal-hover': '2px',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'stamp': {
          '0%': { transform: 'scale(3) rotate(-12deg)', opacity: '0' },
          '60%': { transform: 'scale(1) rotate(-12deg)', opacity: '1' },
          '80%': { transform: 'scale(1.05) rotate(-12deg)' },
          '100%': { transform: 'scale(1) rotate(-12deg)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'stamp': 'stamp 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
