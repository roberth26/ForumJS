define( function( require ) {
    var $             = require( 'jquery' );
    var Component     = require( 'Component' );
    var DateFormatter = require( '../../util/DateFormatter' );
    var Styles        = require( './Styles' );

	return Component.extend({
		render: function() {
			var props = this.getProps();
			var state = this.getState();

			return (
				$( '<li />', {
					css: Styles.post
				}).append([
					$( '<div />', {
						text: DateFormatter.format( props.post.date ),
						css: Styles.date
					}),
					$( '<h2 />', {
						text: props.post.author,
						css: Styles.author
					}),
					$( '<div />', {
						text: props.post.content,
						css: Styles.content
					})
				])
			);
		}
	});
});