const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    alias: {
      utils: path.resolve(__dirname, '..', './src/utils/'),
      store: path.resolve(__dirname, '..', './src/store/'),
      components: path.resolve(__dirname, '..', './src/components/'),
      types: path.resolve(__dirname, '..', './src/types/'),
      services: path.resolve(__dirname, '..', './src/services/'),
      api: path.resolve(__dirname, '..', './src/api/'),
      exceptions: path.resolve(__dirname, '..', './src/exceptions/'),
      mappers: path.resolve(__dirname, '..', './src/mappers/'),
      routing: path.resolve(__dirname, '..', './src/routing/'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  stats: 'errors-only',
}