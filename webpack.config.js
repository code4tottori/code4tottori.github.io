module.exports = {
  mode: 'production',
  module: {
    rules: [{
      test: /\.css?$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader'
    }]
  }
}
