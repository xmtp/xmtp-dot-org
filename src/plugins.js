const webpack = require('webpack')

const webpackPlugin = () => {
  return {
    name: 'Webpack Buffer Polyfill',
    configureWebpack() {
      return {
        plugins: [
          new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
          }),
        ],
        resolve: {
          fallback: {
            buffer: require.resolve('buffer'),
          },
        },
      }
    },
  }
}

const tailwindPlugin = (context, options) => {
  return {
    name: 'tailwind-plugin',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [
        require('postcss-import'),
        // not required, but useful for writing nested CSS
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
      ];
      return postcssOptions;
    },
  };
};

module.exports = { tailwindPlugin, webpackPlugin };