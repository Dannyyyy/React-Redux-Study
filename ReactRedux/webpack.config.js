const path = require("path");
const webpack = require('webpack');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const app = {
	devtool: "cheap-module-eval-source-map",
	resolve: {
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	context: path.join(__dirname),
	entry: {
		"main": ["react-hot-loader/patch", path.join(__dirname, "frontend", "main.tsx"), ]
	},
	output: {
		path: path.resolve(__dirname, "bundles"),
		filename: "[name].js",
		publicPath: "/bundles/"
	},
	stats: {
		// Add information about the reasons why modules are included
		reasons: true,
		// Add errors
		errors: true,
		// Add details to errors (like resolving log)
		errorDetails: true
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "react-hot-loader/webpack"
					},
					{
						loader: "ts-loader",
						options: {
							visualStudioErrorFormat: true,
							transpileOnly: true
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							url: true
						}
					},
					{
						loader: "less-loader",
						options: {
							noIeCompat: true
						}
					}
				]
			},
			{
				test: /\.svg$/,
				use: {
					loader: "svg-url-loader"
				}
			},
			{
				test: /\.(png|jpe?g|woff|woff2|eot|ttf)$/,
				use: {
					loader: "url-loader"
				}
			}
		]
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
		new WebpackBuildNotifierPlugin({
			title: "PojectName Webpack Build",
			logo: path.resolve("./favicon.ico"),
			suppressSuccess: true
		}),
		new webpack.NamedModulesPlugin(),
		
	],
	devServer: {
		contentBase: __dirname,
		compress: true,
		port: 9005,
		clientLogLevel: "info",
		historyApiFallback: {
			disableDotRule: true
		},
		hot: true,
		hotOnly: true,
		inline: true,
		publicPath: "http://localhost:9005/bundles/",
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		watchOptions: {
			aggregateTimeout: 1000,
			ignored: /node_modules/
		},
		overlay: true
	}
};

module.exports = app;
