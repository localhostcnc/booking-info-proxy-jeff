const path = require('path');

const SRC_DIR = path.join(__dirname, '/dist/');
// const SERVICES_DIR = path.join(__dirname);
const DIST_DIR = path.join(__dirname, '/public/');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: '[name].js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        resolve: {
            alias: {
            "styled-components": path.resolve(__dirname, "node_modules", "styled-components"),
            },
        },
     }],
  },
};