define( function( require ) {
	var $            = require( 'jquery' );
	var GlobalStyles = require( 'GlobalStyles' );

	return {
		container: GlobalStyles.container,
		threadTitle: {
			fontSize: '2.4rem',
			marginBottom: 20
		},
		reply: {

		},
		wrapper: {
			overflow: 'hidden'
		},
		list: {
			marginTop: -30
		}
	};
});