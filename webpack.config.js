const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new UglifyJsPlugin()],
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.pug',
          filename: 'index.html'
          
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })        
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              }, {
                loader: 'postcss-loader',
                options: { sourceMap: true, config: { path: 'src/postcss.config.js' } }
              }
            ]
          },
          { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              }, {
                loader: 'postcss-loader',
                options: { sourceMap: true, config: { path: 'src/postcss.config.js' } }
              }, {
                loader: 'sass-loader',
                options: { sourceMap: true }
              }
            ]
          },
          {
            test: /\.pug$/,
            loader: 'pug-loader'
          }
        ],
      },
}