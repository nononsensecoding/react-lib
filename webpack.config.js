const path = require("path");
const pkg = require("./package.json");

module.exports = {
  mode: "production",
  entry: {
    Button: "./src/components/Button",
    ButtonSecondary: "./src/components/ButtonSecondary",
    Form: "./src/components/Form",
    FormActions: "./src/components/FormActions",
    FormField: "./src/components/FormField",
    FormFieldLabel: "./src/components/FormFieldLabel",
    FormFieldInput: "./src/components/FormFieldInput",
    H1: "./src/components/H1",
    H2: "./src/components/H2",
    H3: "./src/components/H3",
    H4: "./src/components/H4",
    H5: "./src/components/H5",
    Input: "./src/components/Input",
    Label: "./src/components/Label",
    LoginForm: "./src/components/LoginForm"
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
