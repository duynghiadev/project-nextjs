module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
                typing: {
                    '40%, 60%': {
                        left: 'calc(100% + 30px)'
                    },
                    '100%': {
                      left: '0%'
                    },
                }
            },
      animation: {
                typing: 'typing 3.5s steps(20) infinite',
            }
    },
  },
  plugins: [],
}