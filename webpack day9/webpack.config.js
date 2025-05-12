const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/, // Match .js files
        exclude: /node_modules/, // Exclude node_modules
        use: ["babel-loader"], // Use Babel for transpilation
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Generate an HTML file
    }),
  ],
  devServer: {
    static: {
      directory: "./dist", // Or your output directory
    },
    port: 8080, // Or your desired port
    hot: true, // Enable Hot Module Replacement
    open: true, // Automatically open the browser
  },
  resolve: {
    modules: ["node_modules", "src"], // Search in these directories
  },
};
