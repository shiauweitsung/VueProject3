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
    }
  },
  publicPath: './',
  // publicPath: process.env.NODE_ENV === 'production' ? '../../' : '/',
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'ShiauLaptopOnline';
        args[0].meta = [{
          property: 'og:title',
          content: 'ShiauLaptop'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'https://shiauweitsung.github.io/ShiauLaptop/#/'
        },
        {
          property: 'og:description',
          content: '全新潮流筆電、藍光、自動調整亮暗度、360度轉向、超頻、48小時續航力、輕軸、機械軸、10萬次按壓、RTX3080、32G、I7、I9'
        },
        {
          property: 'og:image',
          content: 'https://www.flaticon.com/svg/vstatic/svg/58/58593.svg?token=exp=1617875640~hmac=98118ed0a53edfd1e0974965c6796743'
        },
        {
          property: 'og:site_name',
          content: 'ShiauLaptopOnline'
        },
        ];
        return args;
      })
  }
}
