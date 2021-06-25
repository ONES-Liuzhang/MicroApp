const path = require('path');
const name = require("./package.json");
const HtmlWebpaclPlugin = require('html-webpack-plugin');
const VueLoadePlugin = require('vue-loader/lib/plugin');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'

const config = {
  mode:"development",
  entry: {
    app: "./src/main.js"
  },
  output: {
    publicPath: "./",
    path: path.join(__dirname, "dist"),
    filename: isDev ? "[name].js" : "[name].[contenthash:8].js",
    library: `${name}-[name]`,
    libraryTarget: "umd",
    // jsonpFunction: `webpackJsonp_${name}`  // webpack5废弃该属性 , 会根据package.json自动添加uniqueName属性
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      '@': path.join(__dirname, 'src'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    publicPath: "/",
    hot: true,
    progress: true, // 打包进度条
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    port: 3334
  },
  module: {
    noParse: /^vue(-router)?$/,
    rules: [{
      test: /\.js$/,
      exclude: /node_module/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            // presets: [[
            //   '@babel/preset-env', {
            //     corejs: 3,
            //     modules: false,
            //     useBuiltIns: "usage"
            // }]],
            plugins: ['@babel/transform-arrow-functions', 'syntax-dynamic-import']
          }
        }
      ]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.css$/,
      use: [isDev ? 'style-loader' 
      : {
        loader: MiniCssExtraPlugin.loader,
      }, 'css-loader']
    }
  ]},
  plugins: [
    new HtmlWebpaclPlugin({
      filename: 'index.html',
      template: path.join(__dirname, "public/index.html"),
      inject: "body"
    }),
    new VueLoadePlugin()
  ]
}


if(isDev) {
  config.devtool = "inline-source-map"
} else {
  const plugins = config.plugins;
  plugins.push(new CleanWebpackPlugin())
  plugins.push(new MiniCssExtraPlugin())
}

module.exports = config;