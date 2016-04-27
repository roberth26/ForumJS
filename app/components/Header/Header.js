define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Styles    = require( './Styles' );

	return Component.extend({
		render: function() {
			return (
				$( '<header />', {
					css: Styles.header
				}).append(
					$( '<div />', {
						css: Styles.container
					}).append([
						$( '<a />', {
							href: '#/'
						}).append(
							$( '<h1 />', {
								text: 'ForumJS',
								css: Styles.title
							})
						)
					])
				)
			);
		}
	});
});