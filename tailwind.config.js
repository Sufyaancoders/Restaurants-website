/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'blue':'#1e40af'
      },
      fontFamily: {
        'DM': ['DM Sans', 'sans-serif'],
        'Nunito': ['Nunito', 'sans-serif'],
        'Oswald': ['Oswald', 'sans-serif'],
      },
      keyframes: {
        move: {
          "50%": {
            transform: 'translateY(-1rem)'
            }
            }
    }
  },
  animation:{
    'movingY': 'move 2s linear infinite'
      
    }
  },
  plugins: [],
}

