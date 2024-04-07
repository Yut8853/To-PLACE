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
        // publicPath: '/toplace/', 
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
                  sourceMap: !isProduction,
                  presets: ['@babel/preset-env'],
                  plugins: ['@babel/plugin-syntax-dynamic-import']
                },
              },
            ],
          },
          {
            test: /\.(webp|png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/,
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
              filename: 'assets/[name].[hash][ext]',
            },
          },
          // GLSL shaders loader
          {
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: [
              {
                loader: 'raw-loader',
                options: {
                  esModule: false,
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
        new HtmlWebpackPlugin({
          filename: 'policy.html',
          template: './src/policy.html',
          minify: true,
          chunks: ['policy'],
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
