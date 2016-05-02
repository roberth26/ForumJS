define( function() {
	var months = [
		'Jan.',
		'Feb.',
		'Mar.',
		'Apr.',
		'May',
		'Jun.',
		'Jul.',
		'Aug.',
		'Sep.',
		'Oct.',
		'Nov.',
		'Dec.'
	]
	return {
		format: function( date ) {
			if ( !( date instanceof Date ) ) {
				date = new Date( date );
			}
			return months[ date.getMonth() ] + ' ' + ( date.getDay() + 1 ) + ', ' + date.getFullYear();
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