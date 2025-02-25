var webpack = require('webpack');
var pkg = require('./package.json');
var config = require('./src/config');

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-object-rest-spread'],
          presets: ['es2015', 'react']
        }
      },
      {test: /\.(json|geojson)$/, loader: 'json-loader'},
      {test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(css)$/, loader: 'simple-css-loader'},
    ],
  },
  output: {
    path: __dirname  + '/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'APP_VERSION': JSON.stringify(pkg.version),
        'APP_NAME': JSON.stringify(pkg.name),
      }
    }),
  ]
};
