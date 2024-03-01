const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
  main:  path.resolve(__dirname, './src/index.js'),
  about: path.resolve(__dirname, './src/about.js'),
  careers: path.resolve(__dirname, './src/careers.js'),
  business: path.resolve(__dirname, './src/business.js'),
  sales: path.resolve(__dirname, './src/sales.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    publicPath: '/', // この行を追加
  },
  module: {
    rules: [
      // CSS/SASS loaders
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      // JavaScript loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Image and fonts loader (asset modules)
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          },
        ],
        generator: {
          filename: 'assets/[type]/[name].[hash][ext]',
        },
      },
      // GLSL shaders loader
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: [
          'raw-loader', // GLSLファイルを文字列として読み込む
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: true,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.html',
      minify: true,
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
      filename: 'careers.html',
      template: './src/careers.html',
      minify: true,
      chunks: ['careers'],
    }),
    new HtmlWebpackPlugin({
      filename: 'business.html',
      template: './src/business.html',
      minify: true,
      chunks: ['business'],
    }),
    new HtmlWebpackPlugin({
      filename: 'sales.html',
      template: './src/sales.html',
      minify: true,
      chunks: ['sales'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/shaders", to: "assets/shaders" },
        { from: "src/assets/textures", to: "assets/textures" },
        { from: "src/assets/images", to: "assets/images"}
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
};
