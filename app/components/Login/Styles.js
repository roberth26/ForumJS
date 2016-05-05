define( function( require ) {
	var $            = require( 'jquery' );
	var PageStyles   = require( 'Page/Styles' );
	var GlobalStyles = require( 'GlobalStyles' );

	var btn = {
		display: 'block',
		height: 44,
		borderRadius: '3px',
		textAlign: 'center',
		lineHeight: '40px',
		width: '100%',
		cursor: 'pointer',
		fontSize: '1.6rem',
		border: '1px solid white',
		background: 'transparent',
		color: 'white',
		fontFamily: 'inherit',
		textDecoration: 'none'
	};

	return {
		form: {
			width: 240,
			margin: '0 auto',
			paddingBottom: 60
		},
		registerBtn: btn,
		loginBtn: $.extend( {}, btn, {
			marginTop: 35,
			marginBottom: 15
		}),
		input: {
			display: 'block',
			width: '100%',
			padding: '15px',
			height: 44,
			backgroundColor: 'rgba( 0, 0, 0, .2 )',
			border: '1px solid rgba( 0, 0, 0, .2 )',
			borderRadius: 3,
			fontSize: '1.6rem',
			color: 'white'
		},
		inputGroup: {
			marginBottom: 15
		},
		label: {
			color: 'white',
			marginBottom: 8
		},
		container: GlobalStyles.container,
		page: {
			background: GlobalStyles.gradient,
			height: '100%'
		},
		header: {
			background: 'transparent'
		},
		title: $.extend( {}, PageStyles.title, {
			textAlign: 'center',
			color: 'white'
		}),
		pageTransition: GlobalStyles.pageTransition
	};
});