const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  plugins: [new ESLintPlugin()],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
