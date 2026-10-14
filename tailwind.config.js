/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#212121',
        body: '#5b5b5b',
        muted: '#545454',
        subtle: '#979797',
        gold: {
          DEFAULT: '#a57a2f',
          soft: '#b9985e',
          deep: '#8a6626',
        },
        slateblue: '#93a5bc',
        cream: '#e5d8c6',
        sand: '#aa9875',
        surface: '#ededed',
        dark: '#0c0c0c',
        darker: '#161616',
        night: '#262626',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        nuosu: ['Nuosu', '"DM Sans"', 'sans-serif'],
      },
      maxWidth: {
        container: '1260px',
        prose: '800px',
        narrow: '700px',
      },
      borderRadius: {
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '10': '10px',
      },
      boxShadow: {
        card: 'rgba(0, 0, 0, 0.16) 0px 5px 40px 0px',
        soft: 'rgba(0, 0, 0, 0.09) 0px 10px 20px 0px',
        layer: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
        deep: 'rgba(73, 104, 126, 0.16) 0px 16px 24px 0px',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        spin: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease both',
        fadeInUp: 'fadeInUp 0.7s ease both',
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
}