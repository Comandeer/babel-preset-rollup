const envPreset = require( '@babel/preset-env' );

module.exports = {
	presets: [
		[
			envPreset,
			{
				targets: {
					node: '8.0.0'
				},
				modules: false
			}
		]
	]
};
