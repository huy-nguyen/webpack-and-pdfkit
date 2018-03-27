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
    module: {
      rules: [
        {
          test: /node_modules\/(pdfkit|brotli|fontkit|linebreak|png-js|unicode-properties)/,
          loader: 'transform-loader?brfs',
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(),
    ]
  }
}
