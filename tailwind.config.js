/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a202c', // Dark background color
        glow: 'rgba(255, 165, 0, 0.6)', // Glowing effect color with some transparency
      },
      animation: {
        pulse: 'pulse 3s infinite', // Pulsating animation for the profile picture
        rotate: 'rotate 8s linear infinite', // Rotating animation for the circular overlay
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' }, // Normal size
          '50%': { transform: 'scale(1.1)' }, // Slightly bulged size
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' }, // Start at 0 degrees
          '100%': { transform: 'rotate(360deg)' }, // Complete a full rotation
        },
      },
    },
  },
  plugins: [],
};
