# Webpack-Test-TypeScript

```txt
// 安裝 Babel 與相關套件：
npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader --save-dev
// 安裝 TypeScript 相關套件：
npm install typescript ts-loader --save-dev
// 安裝 Webpack 相關套件：
// npm install webpack webpack-cli webpack-dev-server --save-dev
安裝 CSS 相關套件：
npm install style-loader css-loader --save-dev
```

webpack.config.js

```javascript
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
```

tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2016",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": false,
    "jsx": "react-jsx",
    "noImplicitAny": false,
    "sourceMap": true,
    "declaration": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": [
    "src"
  ]
}
```