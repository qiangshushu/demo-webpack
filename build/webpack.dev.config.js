const webpackBaseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');

module.exports = merge(webpackBaseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist',
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
        new webpack.HotModuleReplacementPlugin() //模块热替换
    ]
});