define( function( require ) {
	var $            = require( 'jquery' );
	var GlobalStyles = require( 'GlobalStyles' );

	return {
		post: {
			marginTop: 30,
			borderTop: '1px solid lightgrey',
			padding: '30px 0 0 0'
		},
		author: {
			fontSize: '1.8rem',
			fontWeight: 'bold',
			marginBottom: 10,
			color: GlobalStyles.mainFontColor
		},
		content: {
			color: GlobalStyles.mainFontColor,
			lineHeight: 1.5
		},
		date: {
			float: 'right',
			color: GlobalStyles.mainFontColor
		}
	};
});