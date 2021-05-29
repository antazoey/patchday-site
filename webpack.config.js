const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/pdsite/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'app')],
    extensions: ['.js', '.json', '.jsx', '.css'],
    alias: {
      Components: path.resolve(__dirname, 'src/pdsite/Components/'),
      Styles: path.resolve(__dirname, 'src/pdsite/Styles/'),
      Images: path.resolve(__dirname, 'src/pdsite/Images/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
