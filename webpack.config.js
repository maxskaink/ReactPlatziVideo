const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* const MiniCssExtractPlugin = require("mini-css-extract-plugin"); */

module.exports = {
  entry: './src/index.js', //Entrada y inicio
  output: {
    path: path.resolve(__dirname, 'dist'), //Se necesita a path
    filename: 'bundle.js',
  }, //Salida cuando se termina la compilacion
  resolve: {
    extensions: ['.js', '.jsx'],
  }, //Resuleve las extenciones que se van a utilizar en el pryecto
  module: {
    rules: [{
      test: /\.(js|jsx)$/, //indetificas los archivos con las extenciones escritas
      exclude: /node_modules/, //Excluye a node_modules
      use: {
        loader: 'babel-loader', //Se declara que se va a utilizar babel
      },
    },
    {
      test: /\.html$/, //declara que se va a utlizar html
      use: [{
        loader: 'html-loader', //usar loader
      },
      ],
    },
    {
      test: /\.(s*)css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.(png|gif|jpg)$/,
      use: [
        {
          'loader': 'file-loader',
          options: {
            name: 'assets/[hash].[ext]',
          },
        },
      ],
    },
    ],
  }, //Se crean las reglas

  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',

    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ], //Se declaran los plugins

};
