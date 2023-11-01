const webpack = require("webpack");

const webpackPlugin = () => {
  return {
    name: "Webpack Buffer Polyfill",
    configureWebpack(config, isServer, utils) {
      // Enable WebAssembly
      config.experiments = {
        asyncWebAssembly: true, // for async modules
        // or
        // syncWebAssembly: true, // like webpack 4, but it's deprecated
      };

      // Set module type for WebAssembly files
      config.module.rules.push({
        test: /\.wasm$/,
        type: "webassembly/async", // for async modules
        // or
        // type: "webassembly/sync", // like webpack 4, but it's deprecated
      });

      return {
        plugins: [
          new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
          }),
        ],
        resolve: {
          fallback: {
            buffer: require.resolve("buffer"),
          },
        },
      };
    },
  };
};
const tailwindPlugin = (context, options) => {
  return {
    name: "tailwind-plugin",
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [
        require("postcss-import"),
        // not required, but useful for writing nested CSS
        require("tailwindcss/nesting"),
        require("tailwindcss"),
        require("autoprefixer"),
      ];
      return postcssOptions;
    },
  };
};

module.exports = { tailwindPlugin, webpackPlugin };
