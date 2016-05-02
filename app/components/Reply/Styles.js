define( function( require ) {
	var $            = require( 'jquery' );
	var GlobalStyles = require( 'GlobalStyles' ); 

	return {
		submitBtn: {
			float: 'right',
			padding: '0 20px',
			borderRadius: 5,
			color: 'white',
			backgroundColor: GlobalStyles.mainColor,
			cursor: 'pointer',
			textDecoration: 'none',
			height: 44,
			lineHeight: '44px',
			border: 0,
			fontSize: '1.6rem'
		},
		textarea: {
			display: 'block',
			width: '100%',
			padding: '15px',
			height: 120,
			backgroundColor: 'white',
			border: '1px solid rgba( 0, 0, 0, .2 )',
			borderRadius: 3,
			fontSize: '1.6rem',
			color: GlobalStyles.mainFontColor,
			marginBottom: 15
		},
		title: {
			fontSize: '2.0rem',
			margin: '0 0 30px 0',
			color: GlobalStyles.mainFontColor,
			fontWeight: 'bold'
		},
	};
});