const webpackBaseConfig = require('./webpack.base.config.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
    devtool: 'source-map',
    plugins: [
        new UglifyjsWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({ //代码分离:防止重复
            name: 'runtime'
        })
    ]
});