const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: {
    index: './src/pages/Index.tsx',
  },
  output: {
    filename: '[contenthash].bundle.js',
    path: path.resolve(__dirname, 'www'),
    publicPath: '',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  stats: {
    warningsFilter: [/critical dependency:/i, /module not found:/i],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(mp4|png|jpg|svg|jpeg|gif|woff2|woff|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
              outputPath: 'assets',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ids.HashedModuleIdsPlugin({
      context: __dirname,
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template: 'src/template.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'platforms/android/app/build/outputs/apk/debug/app-debug.apk',
          to: '../../applications/Submarine.[ext]',
        },
      ],
    }),
    new WebpackManifestPlugin(),
  ],
};
module.exports = config;
