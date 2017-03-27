const webpack = require('webpack')
const { resolve } = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = function(env) {
  return {
    devtool: 'cheap-module-source-map',
    entry: './src/js/index.js',
    output: {
      path: resolve(__dirname, '../dist'),
      publicPath: '/dist/',
      filename: 'index.bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.sass$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
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
          })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: 'file-loader?name=[name].[ext]&publicPath=dist/img/&outputPath=/img/'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new UglifyJSPlugin({
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true,
          warnings: false
        },
        comments: false
      }),
      new ExtractTextPlugin({
        filename: 'main.css',
        allChunks: true
      })
    ]
  }
}
