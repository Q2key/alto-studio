/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loaderUtils = require('loader-utils');
const config = {
  entry: "./src/app.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                mode: "local",
                auto: true,
                exportLocalsConvention: "camelCase",
                getLocalIdent: (context, localIdentName, localName, options) => {
                  // Create a hash based on a the file location and class name. Will be unique across a project, and close to globally unique.
                  const hash = loaderUtils.getHashDigest(
                    path.relative(context.rootContext, context.resourcePath) + localName,
                    'md5',
                    'base64',
                    5
                  );

                  const moduleName = path.basename(context.resourcePath).match(/(.*)\.module.css/)[1] ?? '';

                  // Use loaderUtils to find the file or folder name
                  return loaderUtils.interpolateName(
                    context,
                    `${moduleName}--${localName}_${hash}`,
                    options
                  );
                },
              }
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "build"),
    compress: true,
    port: 4000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devtool: 'source-map'
};

module.exports = config;