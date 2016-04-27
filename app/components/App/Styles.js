define( function( require ) {
	var GlobalStyles = require( 'GlobalStyles' );

	return {
		app: {
			position: 'absolute',
			width: '100%',
			height: '100%',
			background: '-webkit-linear-gradient( top, rgb( 33, 60, 90 ) 60px, rgb( 24, 40, 58 ) 300px )',
			overflowY: 'scroll'
		},
		container: GlobalStyles.container
	};
});