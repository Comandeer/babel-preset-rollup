const envPreset = require( '@babel/preset-env' );

module.exports = {
	presets: [
		[
			envPreset,
			{
				targets: {
					node: '10.0.0'
				},
				modules: false
			}
		]
	]
};
