const {resolve} = require('path');

module.exports = {
    entry: './src/scripts/editor.js',

    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },

    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
      },
}