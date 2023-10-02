import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

const devServer: webpackDevServer.Configuration = {
  static: {
    directory: path.join(__dirname, 'dist')
  },
  compress: true,
  port: 9000,
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers':
      'X-Requested-With, content-type, Authorization'
  }
};

const config: webpack.Configuration = {
  devServer,
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.jpg$/i,
        use: ['babel-loader', 'base64-img-css', 'jpg-base64-loader']
      }
    ]
  },
  entry: './src/index.tsx',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'cieclarke.com',
      template: 'src/templates/index.html'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  resolveLoader: {
    alias: {
      'jpg-base64-loader': path.resolve(
        __dirname,
        'src/lib/jpg-base64-loader.js'
      ),
      'base64-img-css': path.resolve(__dirname, 'src/lib/base64-img-css.js')
    }
  }
};
export default config;
