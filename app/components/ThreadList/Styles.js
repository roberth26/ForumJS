define( function( require ) {
	var $            = require( 'jquery' );
	var GlobalStyles = require( 'GlobalStyles' );

	return {
		container: GlobalStyles.container,
		threadTitle: {
			fontSize: '2.4rem',
			marginBottom: 20
		},
		greeting: {
			fontSize: '2.8rem',
			marginBottom: 30
		},
		createThread: {
			float: 'right',
			padding: '8px 15px',
			borderRadius: 5,
			color: 'white',
			backgroundColor: GlobalStyles.mainColor,
			cursor: 'pointer'
		}
	};
});