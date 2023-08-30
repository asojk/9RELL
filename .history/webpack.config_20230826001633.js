module.exports = {
	module: {
		module: {
			rules: [
				{
					test: /\.css$/i,
					exclude: /node_modules/,
					use: ['style-loader', 'css-loader', 'postcss-loader'],
				},
			],
		},
	},
};
