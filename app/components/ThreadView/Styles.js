define( function( require ) {
	var $            = require( 'jquery' );
	var GlobalStyles = require( 'GlobalStyles' );

	return {
		container: GlobalStyles.container,
		threadTitle: {
			fontSize: '2.4rem',
			marginBottom: 20
		},
		replyBtn: {
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
		wrapper: {
			overflow: 'hidden'
		},
		list: {
			marginTop: -31
		},
		author: {
			fontSize: '1.8rem',
			fontWeight: 'bold',
			marginBottom: 10,
			color: GlobalStyles.mainFontColor
		},
		responses: {
			fontSize: '1.8rem',
			fontWeight: 'bold',
			marginBottom: 10,
			color: GlobalStyles.mainColor
		},
		threadContent: {
			color: GlobalStyles.mainFontColor
		},
		openingPost: {
			marginBottom: 30
		}
	};
});