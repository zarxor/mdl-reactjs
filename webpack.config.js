var Path = require("path");
var Webpack = require("webpack");
var Pkg = require("./package.json");

/*
 * Default webpack configuration for development
 */
var Config = {
  devtool: "eval-source-map",
  cache: true,
  entry: {
    app: Path.join(__dirname, "docs", "src", "app.js")
  },
  output: {
    path: Path.join(__dirname, "docs", "build"),
    filename: "[name].js",
    sourceMapFilename: "[file].map"
  },
  resolve: {
    modulesDirectories: ["node_modules"]
  },
  plugins: [
    new Webpack.OldWatchingPlugin() //needed to make watch work. see http://stackoverflow.com/a/29292578/1434764
  ],
  resolveLoader: {
    'fallback': Path.join(__dirname, "node_modules")
  },
  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: "html!markdown"
      }, {
        test: /(\.js)$/,
        exclude: [/node_modules/],
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
}

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === "production") {
  Config.devtool = false;

  Config.plugins = [
    new Webpack
      .optimize
      .OccurenceOrderPlugin(),

    new Webpack
      .optimize
      .UglifyJsPlugin({
        comments: false,
        compress: {
          warnings: false
        }
      }),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ];
};

module.exports = Config;