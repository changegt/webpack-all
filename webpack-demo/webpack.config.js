const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: { //webpack处理入口，指定文件来作为内部依赖图的入口
		main: './main.js',
		demo1: './demo1.js'
	},
	output: { //输出，用于指定最后生成文件的输出位置
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {//模块，用于解析那些非js文件的编译模块
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					// 'less-loader'
				]
			}
		]
	},
	plugins: [ //webpack 插件
		//处理html文件的插件
		new HtmlWebpackPlugin({
			template: './index.html', //定向指定处理那个文件
			filename: 'index.html',
			chunks: ['main'],
			title: 'webpack test',
			inject: true
		}),
		new HtmlWebpackPlugin({
			template: './html/demo1.html', //定向指定处理那个文件
			filename: 'demo1.html', //文件名，同时是映射到域的根节点
			chunks: ['demo1'],
			title: 'webpack demo1',
			inject: true
		}),
		// new webpack.NamedModulesPlugin(),
		// new webpack.HotModuleReplacementPlugin()
	],

	//配置简单的webpack服务器，package.json --open 支持自动打开浏览器  --progress 运行进度输出在控制台 --inline自动刷新
	devServer: {
		contentBase: './', //配置路由查找基础目录 index.html
		// hot: true
	}
};


