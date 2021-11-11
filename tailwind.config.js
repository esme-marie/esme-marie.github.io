module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sky-blue': '#87cefa',
        'teal': '#008080',
        'teal-blue': '#367588',
      },
      fontFamily: {
        'tangerine': ['Tangerine', 'cursive'],
        'baloo': ['"Baloo Chettan 2"', 'cursive']
      },
      animation: {
        'ping-slow': 'ping 3s linear infinite',
      },
      padding: {
        'fluid-video': '56.25%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
