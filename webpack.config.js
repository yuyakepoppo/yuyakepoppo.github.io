const app = {
  entry:[
    __dirname + '/script.js'
  ],
  output: {
    path: __dirname + '/static/js/',
    filename: 'bundle.js'
  }
};

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bootstrap = {
  entry:[
    __dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],
  output: {
    path: __dirname + '/static/css/',
    filename: 'bootstrap.css'
  },
  module: {
    rules: [
      { 
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader")
      },
      { 
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader?name=../font/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin( "../css/bootstrap.css" )
  ]
};

module.exports = [app,bootstrap];
