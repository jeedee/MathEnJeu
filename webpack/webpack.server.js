const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  //devtool: "inline-source-map", Verify use
  target: "node",
  node: {
    __dirname: false,
  },
  entry: "./src/server/index.ts",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "../dist/server"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.join(__dirname, "../src"),
        loader: "ts-loader",
      },
    ],
  },
  externals: [nodeExternals()],
};
