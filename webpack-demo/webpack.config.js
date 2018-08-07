const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './main.js',
		demo1: './demo1.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	plugins: [
		//处理html文件的插件
		new HtmlWebpackPlugin({
			template: './index.html', //定向指定处理那个文件
			filename: 'index.html',
			chunks: ['manifest', 'vendor', 'main'],
			title: 'webpack test',
			inject: true
		}),
		new HtmlWebpackPlugin({
			template: './html/demo1.html', //定向指定处理那个文件
			filename: 'demo1.html',
			chunks: ['manifest', 'vendor', 'demo1'],
			title: 'webpack demo1',
			inject: true
		})
	],

	//配置简单的webpack服务器，支持自动打开浏览器, 同时修改文件后，会自动执行处理，同时刷新浏览器
	devServer: {
		contentBase: './dist' //配置路由查找基础目录 index.html
	}
};


