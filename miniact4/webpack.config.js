var webpack = require( 'webpack' ),
	NODE_ENV = process.env.NODE_ENV || 'development',
	ExtractTextPlugin = require( 'extract-text-webpack-plugin' ),
	webpackConfig = {
		entry  : './client/index.js',
		output : {
			path    : __dirname + '/build',
			filename: 'main.js'
		},
		module : {
			loaders: [
				{
					test   : /\.jsx?$/,
					exclude: /node_modules/,
					loader : 'babel-loader'
				},
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract( {
						fallback: 'style-loader',
						use     : {
							loader : 'css-loader',
							options: { minimize: true }
						}
					} )
				}
			]
		},
		resolve: {
			extensions: [ '*', '.js', '.jsx' ]
		},
		devtool: 'production' !== NODE_ENV ? '#source-map' : false,
		plugins: [
			new webpack.DefinePlugin( {
				'process.env.NODE_ENV': JSON.stringify( NODE_ENV )
			} ),
			new ExtractTextPlugin( 'style.css' )
		]
	};

if ( 'production' === NODE_ENV ) {
	webpackConfig.plugins.push( new webpack.optimize.UglifyJsPlugin() );
}

module.exports = webpackConfig;
