const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        //another: './src/components/print.js' //代码分离:入口起点
    },
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].bundle.js', //动态导入
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|svg|jpg|gif|ico)$/,
            use: ['file-loader']
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        }, {
            test: /\.xml$/,
            use: ['xml-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), //每次build删除dist下所有文件
        new HtmlWebpackPlugin({ //生成index文件
            title: 'Output Management'
        })
    ]
};