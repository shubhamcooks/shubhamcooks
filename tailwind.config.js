/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070708',
          900: '#0a0a0d',
          850: '#0e0e12',
          800: '#121318',
          750: '#16171d',
          700: '#1c1d24',
          650: '#22232b',
          600: '#2a2b34',
          500: '#383943',
          400: '#4a4b56',
          300: '#6b6c78',
          200: '#9a9ba6',
          100: '#c5c6ce',
          50: '#e8e9ed',
        },
        accent: {
          DEFAULT: '#3b82f6',
          glow: '#60a5fa',
          dim: '#1e3a5f',
          deep: '#0c1e36',
        },
        cyan: {
          glow: '#22d3ee',
          dim: '#0e7490',
        },
        teal: {
          glow: '#2dd4bf',
          dim: '#0f766e',
        },
        violet: {
          glow: '#a78bfa',
          dim: '#6d28d9',
        },
        warm: {
          DEFAULT: '#f0ede8',
          dim: '#d4d0c9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'wide-2': '0.15em',
      },
      animation: {
        'grid-pulse': 'gridPulse 8s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-slower': 'floatSlow 9s ease-in-out infinite',
        'contour': 'contour 20s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-ring': 'pulseRing 3s ease-out infinite',
        'scan': 'scan 4s ease-in-out infinite',
      },
      keyframes: {
        gridPulse: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.3' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        contour: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
