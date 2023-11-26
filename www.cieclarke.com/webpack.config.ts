import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack, { DefinePlugin } from 'webpack';
import webpackDevServer from 'webpack-dev-server';

interface Environment {
  FlickrUserId: string;
  FlickrAPIKey: string;
}

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

export function config(env: Environment) {
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
          use: ['babel-loader']
        }
      ]
    },
    entry: './src/index.tsx',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'cieclarke.com',
        template: 'src/templates/index.html'
      }),
      new DefinePlugin({
        __FLICKR_USER_ID__: JSON.stringify(env.FlickrUserId),
        __FLICKR_API_KEY__: JSON.stringify(env.FlickrAPIKey)
      })
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    }
  };
  return config;
}
export default config;
