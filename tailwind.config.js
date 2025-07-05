module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
      },
      backgroundImage: theme => ({
        'skills-pattern': "url('/path/to/your/background-image.jpg')",
      }),
    },
  },
  plugins: [],
}
