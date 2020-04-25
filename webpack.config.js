const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: ""
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
      },
      {
        test: /\.(png|woff|woff2|ttf|svg|jpg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/assets/icons/favicon.png"
    }),
    new CleanWebpackPlugin("./public"),
    new webpack.HotModuleReplacementPlugin()
  ]
};
