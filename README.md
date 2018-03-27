This is a minimal example of how to make `webpack` v4 and `pdfkit` work together.
I think it should also work for `webpack` v3.
It creates a PDF file containing a line of text and a red triangle and then triggers a file download (named `pdfkit-and-webpack.pdf`) based on the example for browser usage shown in the [documentation](https://github.com/devongovett/pdfkit/tree/34cf8d5fa6c8a875ba908c022b75b4f9ef5e07a7#browser-usage).

The most important part is this loader rule in `webpack` config:

```js
export default () => {
  return {
    /* ... */
    module: {
      rules: [
        {
          test: /node_modules\/(pdfkit|brotli|fontkit|linebreak|png-js|unicode-properties)/,
          loader: 'transform-loader?brfs',
        }
      ]
    },
    /* ... */
  }
}

```

To run:
- `yarn`
- `yarn build`
- Start web server and point it at the `dist` directory.
