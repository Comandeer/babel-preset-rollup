const transform = require( '@babel/core' ).transform;
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
	it( 'does not transform ES2015 non-modules features', () => {
		const arrowFn = '() => {};';

		testBabel( arrowFn, arrowFn );
	} );

	it( 'does not transform ES2016 non-modules features', () => {
		const pow = '1 ** 1;';

		testBabel( pow, pow );
	} );

	it( 'does not transform ES2017 non-modules features', () => {
		const asyncSyntax = 'async () => {};';

		testBabel( asyncSyntax, asyncSyntax );
	} );

	it( 'does transform ES2018 non-modules features', () => {
		const spreadObject = 'const { a, ...rest } = { a: 1, b: 2, c: 3 };';

		testBabel( spreadObject );
	} );

	it( 'does not transform imports or exports', () => {
		const code = 'import "foo";\nexport default 0;';

		testBabel( code, code );
	} );
} );
