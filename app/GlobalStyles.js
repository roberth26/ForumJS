define( function( require ) {
	var $ = require( 'jquery' );

	var col = {
		float: 'left',
		width: '100%',
		padding: '0 15px',
		minHeight: 1
	};
	return $.extend( true, {}, {
		mainColor: 'rgb( 114, 0, 255 )',
		mainFontColor: 'rgb( 100, 100, 100 )',
		secondaryColor: '#C1C1C1',
		container: {
			maxWidth: 990,
			padding: '0 15px',
			margin: '0 auto'
		},
		col: col,
		col_3: $.extend( {}, col, {
			width: '25%'
		}),
		col_6: $.extend( {}, col, {
			width: '50%'
		}),
		col_9: $.extend( {}, col, {
			width: '75%'
		}),
		gradient: '-webkit-linear-gradient( -60deg, rgb( 114, 0, 255 ) 25%, rgb( 0, 136, 255 ) 100% )'
	});
});