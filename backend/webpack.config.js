const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const config = {
  name: 'server',
  target: 'node',
  node: {
    __dirname: false,
  },
  entry: './src/server.ts',
  output: {
    // filename: '[name].[contenthash].bundle.js',
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  stats: {
    warningsFilter: [/critical dependency:/i, /module not found:/i],
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
    new CopyPlugin({
      patterns: [
        {
          from: 'src/public',
          to: 'public/[contenthash].[ext]',
          globOptions: {
            ignore: ['**/favicon.ico'],
          },
        },
        { from: 'src/public/favicon.ico', to: 'public/[name].[ext]' },
      ],
    }),
    new WebpackManifestPlugin(),
  ],
};
module.exports = config;
