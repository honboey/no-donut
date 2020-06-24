module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/.jsx',
    './src/**/.ts',
    './src/**/.mdx',
  ],
  theme: {
    fontFamily: {
      "plex-sans": ["IBM Plex Sans", "sans-serif"],
      "plex-serif": ["IBM Plex Serif", "serif"],
      "plex-mono": ["IBM Plex Mono", "monospace"],
    },
    extend: {
      colors: {
        "nd-magenta": "#d9318a",
        "nd-yellow": "#ffe98b"
      }
    },
  },
  variants: {},
  plugins: [],
}
