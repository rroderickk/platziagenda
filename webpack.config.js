const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "./",
	},
	mode: "development",
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"@components": path.resolve(__dirname, "src/components/"),
			"@containers": path.resolve(__dirname, "src/containers/"),
			"@pages": path.resolve(__dirname, "src/pages/"),
			"@routes": path.resolve(__dirname, "src/routes/"),
			"@styles": path.resolve(__dirname, "src/styles/"),
			"@assets": path.resolve(__dirname, "public/assets/"),
			"@logos": path.resolve(__dirname, "public/assets/logos/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(png|jpg|svg|jpeg|webp|svg)$/,
				type: "asset/resource",
				generator: {
					filename: "public/[hash][ext]",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 64340,
		historyApiFallback: true,
	},
};
