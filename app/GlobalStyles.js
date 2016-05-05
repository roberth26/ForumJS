define( function( require ) {
	var $       = require( 'jquery' );
    var animate = require( '../util/Animate' );

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
		gradient: 'linear-gradient( 160deg, rgb( 114, 0, 255 ) 30%, rgb( 0, 136, 255 ) 100% )',
		pageTransition: function( $page, rightToLeft ) {
			animate( $page, 'opacity', '', 0, 1, 300 );
			animate( $page, 'transform', 'translate3d({value}px,0,0)', rightToLeft ? 60 : -60, 0, 300 );
		}
	});
});