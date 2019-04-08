const webpack = require('webpack');
var dotenv = require('dotenv').config({path: __dirname + '/.env'});

module.exports = {
<<<<<<< HEAD
  entry: [
    'babel-polyfill', 
    './src/index'
  ],
=======
  entry: ['babel-polyfill', './src/index'],
>>>>>>> 740d6d9e60ad4d29c68c0fbf95f60b102340d6c3

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      // See https://github.com/aws/aws-amplify/issues/686#issuecomment-387710340.
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ "process.env": dotenv.parsed })
  ],

  devServer: {
    contentBase: './dist',
    hot: true
  },

  node: {
    fs: 'empty'
  }
};