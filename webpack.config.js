const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');


module.exports = {
	entry: resolve(__dirname, 'src', 'index.js'),
	output: {
		filename: 'main.[contenthash].js',
		path: resolve(__dirname, 'dis'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use:[
					{
						loader: 'img-optimize-loader',
						options:{
							compress: {
								mode: 'high',
								webp: true,
								gifsicle: true,
								isableOnDevelopment: false,
								mozjpeg: {
									progressive: true,
									quality: 60,
								  },
							},
							name: '[path][name].[ext]',
						},
					},
				],
			},
			{
			test: /\.(mp[34])$/i,
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]'
					},
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({ template: resolve(__dirname, 'src', 'index.html')}),
		new MiniCssExtractPlugin ({ filename: 'style.[contenthash].css'}),
	]
}