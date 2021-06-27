const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require("path")
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry:{
    main: './index.js'
  },
  output: {
    publicPath: './',
    path: path.join(__dirname, "dist"),
    filename: isDev ? '[name].js' : '[name].[contenthash:8].js',
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      "vue$": "vue/dist/vue.runtime.esm.js"
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    publicPath: "/",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3001,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, "index.html"),
      inject: "body",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new VueLoaderPlugin()
  ]
}