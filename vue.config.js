const webpack = require("webpack");
const path = require("path");
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ],
    resolve: {
      alias: {
        "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
        "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
      }
    },
  },
}
