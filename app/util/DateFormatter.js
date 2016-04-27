define( function() {
	return {
		format: function( date ) {
			var hours = date.getHours();
			var am = hours < 12 ? 'am' : 'pm';
			hours %= 12;
			var minutes = date.getMinutes();
			minutes = minutes < 10 ? ( '0' + minutes ) : minutes;
			return hours + ':' + minutes + am;
		},
		difference: function( start, end ) {
			if ( !start || !end ) return null;
			
			var delta = Math.abs( end.getTime() - start.getTime() );

			var hours = parseInt( ( delta / ( 1000 * 60 * 60 ) ) % 24 );
			hours = ( hours < 10 ) ? '0' + hours : hours;			
	        
			var minutes = parseInt( ( delta / ( 1000 * 60 ) ) % 60 );
			minutes = ( minutes < 10 ) ? '0' + minutes : minutes;
	        
	        var seconds = parseInt( ( delta / 1000 ) % 60 );
	        seconds = ( seconds < 10 ) ? '0' + seconds : seconds;

	        return hours + 'h ' + minutes + 'm ' + seconds + 's';
		}
	}
});