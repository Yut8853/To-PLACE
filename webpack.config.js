  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  const CopyPlugin = require("copy-webpack-plugin");
  const path = require('path');

  module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    return {
      mode: isProduction ? 'production' : 'development',
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
      devtool: isProduction ? false : 'eval-source-map',
      module: {
        rules: [
          {
            test: /\.(sass|scss|css)$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  sourceMap: !isProduction,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: !isProduction,
                },
              },
            ],
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
            type: 'asset/resource',
            generator: {
              filename: 'videos/[name][ext]',
            },
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  sourceMap: true, // このオプションは 'use' 内で 'loader' の設定と一緒に定義されるべきです
                },
              },
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/,
            type: 'asset/resource',
            use: [
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 65,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
            generator: {
              filename: 'assets/[type]/[name].[hash][ext]',
            },
            options: {
              sourceMap: true,
            },
          },
          // GLSL shaders loader
          {
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: [
              {
                loader: 'raw-loader',
                options: {
                  sourceMap: !isProduction,
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html',
          minify: true,
          chunks: ['main','video', 'carousel', 'cookie', 'hamburger', 'light', 'music', 'smooth', 'start', 'waveCanvas','scrollTrigger'],
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
            minSize: 30000,
            maxSize: 500000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: false,
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
              }
            }
          }  
      },
      performance: {
        hints: false,
      },
    };
    }
