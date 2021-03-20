import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server';
import { createShare } from 'webpack-utils';

const { ModuleFederationPlugin } = webpack.container;

const appDependencies = require('./package.json').dependencies;
const appName = require('./package.json').name;

const config: webpack.Configuration = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 5001,
  },
  target: 'web',
  output: {
    publicPath: 'auto',
    filename: 'main.nocache.js',
    chunkFilename: '[name].[contenthash].js',
    clean: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: `microfrontend_${appName}`,
      filename: 'micro-frontend.nocache.js',
      exposes: {
        './Pages': './src/Pages',
        './Fragments': './src/Fragments',
      },
      shared: {
        ...createShare('react', appDependencies),
        ...createShare('@material-ui/core', appDependencies),
        ...createShare('microfrontend-react', appDependencies),
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
export default config;
