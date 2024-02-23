const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
    performance: {
      // アセットサイズの警告を無視する設定
      hints: false,
  
      // オプションで、特定のアセットに対するカスタムしきい値を設定することもできます。
      // maxEntrypointSize: 数値, // エントリポイントの最大サイズ (バイト単位)
      // maxAssetSize: 数値, // アセットの最大サイズ (バイト単位)
    },
    optimization: {
      splitChunks: {
        chunks: 'all', // すべてのチャンクに対して分割を適用
        minSize: 20000, // 生成されるチャンクの最小サイズ（バイト単位）
        maxSize: 500000, // チャンクの最大サイズ（0は無効）
        minChunks: 1, // 分割前に共有される最小チャンク数
        maxAsyncRequests: 30, // 非同期チャンクの最大数
        maxInitialRequests: 30, // エントリーポイントでの非同期チャンクの最大数
        automaticNameDelimiter: '~', // 生成される名前の区切り文字
        cacheGroups: { // キャッシュグループの設定
          vendors: {
            test: /[\\/]node_modules[\\/]/, // node_modules内のモジュールを対象
            priority: -10 // 優先度
          },
          default: {
            minChunks: 2, // このグループに含まれるチャンクは最低2回使用されている必要がある
            priority: -20,
            reuseExistingChunk: true // 既存のチャンクを再利用
          }
        }
      }
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
          generator: {
            filename: 'assets/css/[hash][ext][query]'
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[hash][ext][query]'
          },
        },
        {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          use: [
            'raw-loader',
            'glslify-loader',
          ],
          generator: {
            filename: 'assets/shaders/[hash][ext][query]'
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[hash][ext][query]'
          },
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
new ImageMinimizerPlugin({
  minimizer: {
    implementation: ImageMinimizerPlugin.imageminMinify,
    options: {
      plugins: [
        ['gifsicle', { interlaced: true }],
        ['jpegtran', { progressive: true }],
        ['optipng', { optimizationLevel: 5 }],
        // SVG と WEBP に関する設定もここで追加可能
      ],
    },
  },
  // 他の必要なオプションをここに追加...
}),

      // 画像の最適化に関する設定をここに追加...
    ].filter(Boolean),
  };

};
