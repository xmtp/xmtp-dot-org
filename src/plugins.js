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

module.exports = { tailwindPlugin };