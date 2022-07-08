const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devtool: 'source-map',
  entry: './index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'expose-loader',
            options: {
              exposes: [
                {
                  globalName: 'WasmflowClient',
                  moduleLocalName: 'Client',
                },
              ],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'browser/'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
