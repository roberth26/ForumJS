define( function( require ) {
	var $            = require( 'jquery' );
	var GlobalStyles = require( 'GlobalStyles' ); 

	return {
		form: {
			width: 240
		},
		button: {
			display: 'block',
			height: 44,
			backgroundColor: GlobalStyles.mainColor,
			color: 'white',
			borderRadius: '3px',
			border: 0,
			textAlign: 'center',
			lineHeight: '40px',
			width: '100%',
			cursor: 'pointer',
			marginTop: 35,
			fontSize: '1.6rem'
		},
		input: {
			display: 'block',
			width: '100%',
			padding: '15px',
			height: 44,
			backgroundColor: 'rgb( 245, 245, 245 )',
			border: '1px solid rgb( 205, 205, 205 )',
			borderRadius: 3,
			fontSize: '1.6rem',
			color: GlobalStyles.mainFontColor
		},
		checkbox: {
			verticalAlign: 'middle',
			display: 'inline-block',
			marginLeft: 10
		},
		register: {
			float: 'right',
			marginBottom: 15
		},
		inputGroup: {
			marginBottom: 15
		},
		label: {
			color: GlobalStyles.mainFontColor,
			marginBottom: 5
		},
		container: GlobalStyles.container
	};
});