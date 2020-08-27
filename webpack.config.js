const {resolve} = require('path')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served\
      watch: true,
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./'] }
    })
  ],
    entry: resolve(__dirname, 'src/index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'vrcode.js',
        library: 'vrcode'
    },
    // plugins: [
    //     new UglifyJsPlugin({
    //         exclude: [/\.min\.js$/gi] // skip pre-minified libs
    //     })
    // ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: 'vue-style-loader!css-loader!sass-loader',
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            },
          },
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]',
          },
        },
      ],
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common.js',
      },
    },
}
