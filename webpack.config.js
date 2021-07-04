const {	resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
	mode: 'development',
	entry: resolve(__dirname, 'js', 'main.js'),
	output: {
		filename: 'main.[contenthash].js',
		path: resolve(__dirname, 'build'),
		clean: true,
	},
	// devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.mp3$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				},
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({ template: resolve(__dirname, 'index.html')}),
		new MiniCssExtractPlugin ({ filename: 'style.[contenthash].css'}),
		// new BundleAnalyzerPlugin
	]
}