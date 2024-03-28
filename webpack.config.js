const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const { start } = require('repl');

module.exports = {
  mode: 'production',
  entry: {
  main:  path.resolve(__dirname, './src/index.js'),
  blob:  path.resolve(__dirname, './src/blob.js'),
  carousel:  path.resolve(__dirname, './src/carousel.js'),
  cookie:  path.resolve(__dirname, './src/cookie.js'),
  video:  path.resolve(__dirname, './src/video.js'),
  hamburger:  path.resolve(__dirname, './src/hamburger.js'),
  light:  path.resolve(__dirname, './src/light.js'),
  light2:  path.resolve(__dirname, './src/light2.js'),
  music:  path.resolve(__dirname, './src/music.js'),
  smooth:  path.resolve(__dirname, './src/smooth.js'),
  policy:  path.resolve(__dirname, './src/policy.js'),
  start:  path.resolve(__dirname, './src/start.js'),
  start2:  path.resolve(__dirname, './src/start2.js'),
  waveCanvas:  path.resolve(__dirname, './src/waveCanvas.js'),
  secondCanvas:  path.resolve(__dirname, './src/secondCanvas.js'),
  scrollTrigger:  path.resolve(__dirname, './src/scrollTrigger.js'),

  about: path.resolve(__dirname, './src/about.js'),
  careers: path.resolve(__dirname, './src/careers.js'),
  business: path.resolve(__dirname, './src/business.js'),
  sales: path.resolve(__dirname, './src/sales.js'),
  policy: path.resolve(__dirname, './src/policy.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    // publicPath: '/', 
    publicPath: '/', 
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
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        type: 'asset/resource',
        generator: {
          filename: 'videos/[name][ext]'
        }
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
      chunks: ['main', 'carousel', 'cookie', 'video', 'hamburger', 'light', 'music', 'smooth', 'start', 'waveCanvas', 'secondCanvas','scrollTrigger'],
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.html',
      minify: true,
      chunks: ['about', 'hamburger', 'light', 'music', 'smooth', 'start'],
    }),
    new HtmlWebpackPlugin({
      filename: 'careers.html',
      template: './src/careers.html',
      minify: true,
      chunks: ['careers', 'hamburger', 'light', 'music', 'smooth', 'start'],
    }),
    new HtmlWebpackPlugin({
      filename: 'business.html',
      template: './src/business.html',
      minify: true,
      chunks: ['business', 'hamburger', 'light', 'music', 'smooth', 'start'],
    }),
    new HtmlWebpackPlugin({
      filename: 'sales.html',
      template: './src/sales.html',
      minify: true,
      chunks: ['sales', 'hamburger', 'light2', 'music', 'smooth', 'start'],
    }),
    new HtmlWebpackPlugin({
      filename: 'policy.html',
      template: './src/policy.html',
      minify: true,
      chunks: ['policy', 'hamburger', 'light', 'music', 'smooth', 'start'],
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
