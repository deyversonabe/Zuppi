import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        zuppi: {
          purple: '#7c3cff',
          magenta: '#f02ecb',
          orange: '#ff7a18',
          dark: '#05020f',
          panel: '#0d0720',
          card: '#0a0618',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 35px rgba(124,60,255,.35)',
        'glow-orange': '0 0 35px rgba(255,122,24,.35)',
        'glow-magenta': '0 0 35px rgba(240,46,203,.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
