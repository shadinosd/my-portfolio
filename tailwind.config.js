export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    animation: {
      'spin-slow': 'spin-slow 8s linear infinite',
      'spin-slower': 'spin-slower 12s linear infinite',
      'float': 'float 6s ease-in-out infinite',
      'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      'star-twinkle': 'star-twinkle 2s ease-in-out infinite',
    },
    keyframes: {
      'spin-slow': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      'spin-slower': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(-360deg)' },
      },
      'float': {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      'pulse-glow': {
        '0%, 100%': {
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
          transform: 'scale(1)'
        },
        '50%': {
          boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
          transform: 'scale(1.05)'
        },
      },
      'star-twinkle': {
        '0%, 100%': { opacity: '0.3' },
        '50%': { opacity: '1' },
      },
    },
  },
};
export const plugins = [];