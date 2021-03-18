const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require("path");

//const appDependencies = require("./package.json").dependencies;
const appName = require("./package.json").name;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 5001,
  },
  target: "web",
  output: {
    publicPath: "auto",
    filename: "main.nocache.js",
    chunkFilename: "[name].[contenthash].js",
    clean: true,
  },
  devtool: "source-map",
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: appName,
      library: { type: "var", name: appName },
      filename: "micro-frontend.nocache.js",
      exposes: { Details: "./src/Details" },
      /*
      // adds react as shared module
      // version is inferred from package.json
      // there is no version check for the required version
      // so it will always use the higher version found
      shared: {
        react: {
          requiredVersion: appDependencies.react,
          import: "react", // the "react" package will be used a provided and fallback module
          shareKey: "react", // under this name the shared module will be placed in the share scope
          shareScope: "default", // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
        },
        "react-dom": {
          requiredVersion: appDependencies["react-dom"],
          singleton: true, // only a single version of the shared module is allowed
        },
        // adds moment as shared module
        // version is inferred from package.json
        // it will use the highest moment version that is >= 2.24 and < 3
        moment: appDependencies.moment,
      },
      */
    }),
    //new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
