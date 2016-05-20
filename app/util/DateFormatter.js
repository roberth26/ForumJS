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
			return months[ date.getMonth() ] + ' ' + date.getDate() + ', ' + date.getFullYear();
		}
	}
});