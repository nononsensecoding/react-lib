const path = require("path");
const pkg = require("./package.json");

module.exports = {
  mode: "production",
  entry: {
    Button: "./src/components/Button"
  },
  externals: Object.keys(pkg.peerDependencies),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader"
      }
    ]
  }
};
