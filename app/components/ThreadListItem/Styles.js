define( function( require ) {
	var $            = require( 'jquery' );
	var GlobalStyles = require( 'GlobalStyles' );

	var listItem = {
		padding: 8,
		borderBottom: '1px solid rgba( 0, 0, 0, .25 )'
	};
	return {
		listItem: listItem,
		listItemAlt: $.extend( {}, listItem, {
			backgroundColor: 'rgb( 240, 240, 240 )'
		}),
		author: {
			float: 'right'
		}
	};
});