// PostCSS will import this into every stylesheet
// in order to be able to polyfill these features

const screen = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  xxLarge: 1440,
}

module.exports = {
  customMedia: {
    '--min-small': `(min-width: ${screen.small}px)`,
    '--min-medium': `(min-width: ${screen.medium}px)`,
    '--min-large': `(min-width: ${screen.large}px)`,
    '--min-x-large': `(min-width: ${screen.xLarge}px)`,
    '--min-xx-large': `(min-width: ${screen.xxLarge}x)`,

    '--max-x-small': `(max-width: ${screen.small - 1}px)`,
    '--max-small': `(max-width: ${screen.medium - 1}px)`,
    '--max-medium': `(max-width: ${screen.large - 1}px)`,
    '--max-large': `(max-width: ${screen.xLarge - 1}px)`,
    '--max-x-large': `(max-width: ${screen.xxLarge - 1}px)`,

    '--author-breakpoint': `(min-width: ${screen.medium}px)`,
  },
  customProperties: {
    '--site-padding': '1rem',

    /* http://www.colourlovers.com/palette/4581821/Haunted */
    '--beige-light': '#faead3',
    '--beige': '#fee2cc',
    '--red': '#ee7266',
    '--blue': '#007faa',
    '--blue-dark': '#33495e',
    '--grey': '#999',
  },
  customSelectors: {
    ':--hanging-single-quotes': '.hanging-single-quotes',
    ':--hanging-double-quotes': '.hanging-double-quotes',
  },
}