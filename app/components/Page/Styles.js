define( function( require ) {
	var $            = require( 'jquery' );
	var GlobalStyles = require( 'GlobalStyles' ); 

	return {
		page: {
			backgroundColor: 'rgb( 230, 230, 230 )'
		},
		container: $.extend( {}, GlobalStyles.container, {
			paddingBottom: 60,
			opacity: 0
		}),
		title: {
			fontSize: '2.4rem',
			margin: '15px 0',
			color: GlobalStyles.mainColor,
			fontWeight: 'bold'
		},
		button: {
			float: 'right',
			padding: '0 20px',
			borderRadius: 5,
			color: 'white',
			backgroundColor: GlobalStyles.mainColor,
			cursor: 'pointer',
			textDecoration: 'none',
			height: 44,
			lineHeight: '44px',
			marginTop: 5
		},
    	pageTransition: GlobalStyles.pageTransition
	};
});