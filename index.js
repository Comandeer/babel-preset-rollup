const envPreset = require( 'babel-preset-env' );
const helpers = require( 'babel-plugin-external-helpers' );

module.exports = {
	presets: [
		[
			envPreset,
			{
				targets: {
					node: '4.0.0'
				},
				modules: false
			}
		]
	],

	plugins: [
		helpers
	]
};
