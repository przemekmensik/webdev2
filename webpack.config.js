//Konfiguracja Webpack
const	path	=	require("path");

module.exports	=	{
		entry:	"./js/zadanie03.jsx",
		output:	{
			filename: 'out.js',
			path: path.resolve(__dirname, 'js')
		},
    watch: true,
		module:	{
				rules:	[
							{
								test:	/\.jsx$/,
								exclude:	/node_modules/,
								use:	{
									loader: 'babel-loader',
									options: {
										presets: ['react']
									}
								}
							},
              {
								test:	/\.js$/,
								exclude:	/node_modules/,
								use:	{
									loader: 'babel-loader',
									options: {
										presets: ['react']
									}
								}
							}
				]
		}
};
