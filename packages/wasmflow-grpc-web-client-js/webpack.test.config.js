const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'test'),
  devtool: 'inline-source-map',
  entry: './index.test.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, 'browser/'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
