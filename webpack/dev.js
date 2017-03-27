const webpack = require('webpack')
const { resolve } = require('path')
const autoprefixer = require('autoprefixer')

module.exports = function(env) {
  return {
    devtool: 'eval',
    entry: './src/js/index.js',
    output: {
      path: resolve(__dirname, '../dist'),
      publicPath: '/dist/',
      filename: 'index.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9',
                    ],
                  }),
                ],
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: 'file-loader?name=[name].[ext]&publicPath=dist/img/&outputPath=/img/'
        }
      ]
    },
    devServer: {
      compress: true,
      hot: true,
      stats: 'errors-only',
      open: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]
  }
}
