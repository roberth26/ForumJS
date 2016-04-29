define( function( require ) {
    var $ = require( 'jquery' );
	
	return function() {
		return $.getJSON( 'data.json' );
	}
});