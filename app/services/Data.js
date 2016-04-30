define( function( require ) {
    var $ = require( 'jquery' );
	
	return {
		get: function() {
			return $.getJSON( 'data.json' );
		}
	};
});