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
  }
};
export default config;
