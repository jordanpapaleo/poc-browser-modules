const path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/js/index')
  },
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'public'),
    library: 'apple',
    libraryTarget: 'umd',
    filename: 'app.js',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader'],
      },
    ],
  },
}

// globalObject: 'this' // https://webpack.js.org/configuration/output/#outputglobalobject
