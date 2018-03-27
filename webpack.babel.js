const HtmlWebpackPlugin = require('html-webpack-plugin')
import path from 'path';

const buildOutputDir = 'dist';

export default () => {
  return {
    entry: './src/index',
    output: {
      path: path.resolve(buildOutputDir),
      filename:  '[name].js',
      chunkFilename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin(),
    ]
  }
}
