const envPreset = require( '@babel/preset-env' );

module.exports = {
	presets: [
		[
			envPreset,
			{
				targets: {
					node: '6.0.0'
				},
				modules: false
			}
		]
	]
};
