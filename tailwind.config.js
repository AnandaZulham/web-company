module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
	  backgroundImage: theme => ({
		'hero-pattern': "url('./assets/it_company.png')",
	  }),
	}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
