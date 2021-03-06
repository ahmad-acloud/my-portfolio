const path = require('path');

module.exports = {

//watch: true,



  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'

  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react'],
        }
      }
    }]
  },
  mode: 'development'
}
