const isProduction = process.env.NODE_ENV === 'production';
const onlyInProd = (plugin, options) => {
  if (isProduction) {
    return {
      [plugin]: options,
    };
  }
};

module.exports = {
  plugins: {
    'postcss-import': {},
    precss: {},
    'postcss-shape': {},
    'postcss-short': {},
    'postcss-aspect-ratio': {},
    tailwindcss: './node_modules/~styles/tailwind.config.js',
    ...onlyInProd('cssnano', {
      preset: 'default',
    }),
    autoprefixer: {},
  },
};
