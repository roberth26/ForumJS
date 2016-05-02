define( function( require ) {
	var $            = require( 'jquery' );
	var GlobalStyles = require( 'GlobalStyles' ); 

	return {
		input: {
			display: 'block',
			width: '100%',
			padding: '15px',
			height: 44,
			backgroundColor: 'white',
			border: '1px solid rgba( 0, 0, 0, .2 )',
			borderRadius: 3,
			fontSize: '1.6rem',
			color: GlobalStyles.mainFontColor
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
			color: GlobalStyles.mainFontColor
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
			marginTop: 5,
			border: 0,
			fontSize: '1.6rem'
		},
		inputGroup: {
			marginBottom: 15
		},
		label: {
			color: GlobalStyles.mainFontColor,
			marginBottom: 8
		},
		container: GlobalStyles.container,
		title: {
			fontSize: '2.8rem',
			marginBottom: 30
		},
	};
});