define( function( require ) {
	var $ = require( 'jquery' );

	return function( $el, property, value, start, end, duration ) {
		var css = {};
		if ( value.indexOf( '{value}' ) == -1 )
			value = '{value}';
		css[ property ] = value;
	    $( { val: start } ).animate( { val: end }, {
	        duration: duration,
	        queue: false,
	        step: function( currentValue ) {
	        	css[ property ] = value.replace( '{value}', currentValue );
	            $el.css( css );
	        }
	    });
	};
});