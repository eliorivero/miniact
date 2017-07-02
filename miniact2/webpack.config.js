module.exports = {
	entry: './client/index.js',
	output: {
		path: __dirname + '/build',
		filename: 'main.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
};
