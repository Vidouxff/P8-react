const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 3000
  }
};