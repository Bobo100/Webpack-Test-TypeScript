const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public", "dist"),
  },
  devServer: {
    // static: 設置webpack-dev-server提供靜態資源的目錄，該選項可以接收一個對象或一個字符串
    // 對象的鍵表示提供的資源的路徑，值表示對應的資源的路徑，字串表示提供的資源的路徑。

    static: path.join(__dirname, "public"),
    compress: true,
    port: 3000,
    hot: true, // 啟用 HMR 功能
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 使用 HMR 插件
  ],
};
