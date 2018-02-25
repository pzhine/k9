const path = require('path')


module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            }
          },
          {
            loader: "sass-loader"
          }
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'react-svg-loader',
            query: {
              es5: false,
              svgo: {
                pretty: true,
                plugins: [{ removeStyleElement: true }],
              },
            },
          },
        ],
      }
    ]
  }
}
