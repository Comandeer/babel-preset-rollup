const { transform } = require( 'babel-core' );
const chai = require( 'chai' );
const preset = require( './' );

const expect = chai.expect;

function testBabel( code, expected ) {
	const babeledCode = transform( code, { presets: [ preset ] } ).code;

	if ( expected ) {
		expect( babeledCode ).to.equal( expected );
	} else {
		expect( babeledCode ).not.to.equal( code );
	}
}

describe( 'babel-preset-rollup', () => {
	it( 'transforms correctly ES2015 non-modules features', () => {
		testBabel( '() => {};', '(function () {});' );
	} );

	it( 'transforms correctly ES2016 non-modules features', () => {
		testBabel( '1 ** 1', 'Math.pow(1, 1);' );
	} );

	it( 'transforms correctly ES2017 non-modules features', () => {
		testBabel( 'async () => {}' );
	} );

	it( 'does not transform imports or exports', () => {
		const code = 'import "foo";\nexport default 0;';

		testBabel( code, code );
	} );
} );
