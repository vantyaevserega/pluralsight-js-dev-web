import path from 'path';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import webpackmd5Hash from 'webpack-md5-hash';
import extractTextPlugin from 'extract-text-webpack-plugin';

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'), 
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        // Generate an external css file with a hash in the filename
        new extractTextPlugin('[name].[contenthash].css'),

        // Hash the files using md5 so that their names when the content changes
        new webpackmd5Hash(),

        // for create separate bundle, it is cached separetly
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        // Create HTML file that includes to bundle JS
        new htmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeReduantAttributes: true,
                useShortDocType: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true,
            trackJsToken: '4c81e4c7c69747a08a46488789692128'
        }),

        // Eliminate duplicates packages when generating bundle
        new webpack.optimize.DedupePlugin(),

        // Minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loader: extractTextPlugin.extract('css?sourceMap') }
        ]
    }
}