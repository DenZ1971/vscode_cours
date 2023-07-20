const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    static: './dist',
  },
  plugins: [ 
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
               esModule: true,
            }
          },'css-loader'],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        
      }
    ]
  }
};