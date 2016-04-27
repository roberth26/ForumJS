requirejs.config({
	'baseUrl': 'app/components',
	'paths': {
		'jquery': [
			'http://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min',
			'../vendor/jquery.min'
		],
		'GlobalStyles': '../GlobalStyles',
		'DateFormatter': '../util/DateFormatter'
	}
});

requirejs( [ 'jquery', 'App/App' ], function( $, App ) {
	$( document ).ready( function() {
		$.getJSON( 'data.json', function( data ) {
			$( '#app_container' ).append(
				App( $.extend( {}, data, {
					id: 'App-01__'
				}))
			);
		});
	});
});