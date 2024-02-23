const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      assetModuleFilename: 'assets/[hash][ext][query]',
      clean: true,
    },
    devServer: {
      static: './dist',
      hot: true,
    },
    optimization: {
      minimize: !isDevelopment,
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: {
        name: 'runtime',
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(sass|scss|css)$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          use: [
            'raw-loader',
            'glslify-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.html$/,
          use: 'html-loader',
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: isDevelopment ? false : { removeComments: true, collapseWhitespace: true },
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[contenthash].css',
      }),
      new CleanWebpackPlugin(),
      new ImageMinimizerPlugin({
        minimizerOptions: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            // SVG と WEBP に関する設定もここで追加可能
          ],
        },
      }),
      // 画像の最適化に関する設定をここに追加...
    ].filter(Boolean),
  };
};
