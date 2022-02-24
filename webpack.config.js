const path = require("path");
const glob = require("glob");

module.exports = {
  entry: glob.sync("./src/**/*.ts"),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  stats: "minimal",
};
