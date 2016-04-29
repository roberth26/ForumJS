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
	App.then( function( app ) {
		$( document ).ready( function() {
			$( '#app_container' ).append(
				app({
					id: 'App-01__'
				})
			);
		});
	});
});