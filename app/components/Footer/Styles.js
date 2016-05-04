define( function( require ) {
	var $            = require( 'jquery' );
	var GlobalStyles = require( 'GlobalStyles' ); 

	return {
		footer: {
			background: 'rgb( 215, 215, 215 )',
			height: 300,
			padding: '30px 0'
		},
		title: {
			fontSize: '3.2rem',
			textAlign: 'center',
			lineHeight: '1',
			color: 'white',
			lineHeight: '40px',
			height: 40,
			color: GlobalStyles.mainColor,
			marginBottom: 30
		},
		container: GlobalStyles.container,
		username: {
			textAlign: 'center',
			marginBottom: 15,
			color: GlobalStyles.mainFontColor
		},
		menu: {
			listStyle: 'none',
			textAlign: 'center',
			marginBottom: 30
		},
		menuItem: {
			display: 'inline-block',
			marginRight: 20
		},
		link: {
			textDecoration: 'none',
			color: GlobalStyles.mainColor
		},
		about: {
			textAlign: 'center',
			color: GlobalStyles.mainFontColor
		}
	};
});