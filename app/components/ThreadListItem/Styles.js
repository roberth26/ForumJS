define( function( require ) {
	var $            = require( 'jquery' );
	var GlobalStyles = require( 'GlobalStyles' );

	var listItem = {
		padding: '10px 15px',
		borderTop: '1px solid rgba( 0, 0, 0, .125 )',
		color: GlobalStyles.mainFontColor,
		background: 'transparent',
		fontFamily: 'inherit'
	};
	return {
		link: {
			textDecoration: 'none',
			color: 'inherit'
		},
		listItem: listItem,
		listItemAlt: $.extend( {}, listItem, {
			background: '-webkit-linear-gradient( left, transparent 0%, rgb( 220, 220, 220 ) 25%,rgb( 220, 220, 220 ) 75%, transparent',
		}),
		listItemHover: $.extend( {}, listItem, {
			background: GlobalStyles.mainColor,
			color: 'white'
		}),
		author: {
			color: 'inherit',
			fontSize: '1.4rem',
			fontFamily: 'inherit'
		},
		title: {
			color: 'inherit',
			marginBottom: 5,
			fontWeight: 'bold',
			fontSize: '1.8rem',
			fontFamily: 'inherit'
		},
		date: {
			float: 'right',
			lineHeight: '38px',
			height: 38
		}
	};
});