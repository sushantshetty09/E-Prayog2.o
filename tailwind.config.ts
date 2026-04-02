/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#060d1f',
        'navy-mid': '#0b1630',
        'navy-card': '#0e1c3a',
        glass: 'rgba(255,255,255,0.04)',
        'glass-border': 'rgba(255,255,255,0.08)',
        green: '#3dd68c',
        'green-dim': '#1e9c5e',
        cyan: '#5ce0f0',
        'cyan-dim': '#2ba8bb',
        white: '#f0f4ff',
        muted: 'rgba(200,215,255,0.5)',
      },
      fontFamily: {
        'display': ['Fraunces', 'serif'],
        'body': ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'hero': '72px',
        'section': '48px',
        'card-title': '32px',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'wide': '0.12em',
      },
      lineHeight: {
        'tight': '1.15',
        'relaxed': '1.75',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      backdropBlur: {
        'glass': '20px',
      },
      spacing: {
        'section': '80px',
        'section-mobile': '40px',
      },
      maxWidth: {
        'container': '1280px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glow-green': '0 0 24px rgba(61, 214, 140, 0.3)',
        'glow-cyan': '0 0 24px rgba(92, 224, 240, 0.3)',
        'card-hover': '0 24px 48px rgba(61, 214, 140, 0.12)',
      },
      borderRadius: {
        'card': '20px',
        'pill': '9999px',
        'glass': '24px',
      },
    },
  },
  plugins: [],
}
