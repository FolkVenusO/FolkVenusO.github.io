/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0b1021',
        mist: '#d5e0ff',
        blush: '#ff9fb2',
        lilac: '#b794f4',
        obsidian: '#0f172a',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(255, 159, 178, 0.35), transparent 28%), radial-gradient(circle at 80% 10%, rgba(119, 182, 255, 0.35), transparent 25%), radial-gradient(circle at 30% 80%, rgba(183, 148, 244, 0.35), transparent 30%), radial-gradient(circle at 75% 75%, rgba(93, 255, 213, 0.35), transparent 30%)',
      },
      boxShadow: {
        glass: '0 8px 40px rgba(0, 0, 0, 0.2)',
        glow: '0 0 50px rgba(148, 99, 255, 0.35)',
      },
      borderRadius: {
        '3xl': '1.6rem',
        '4xl': '2.4rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blurPulse: {
          '0%, 100%': { filter: 'blur(32px)' },
          '50%': { filter: 'blur(42px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blurPulse: 'blurPulse 10s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
