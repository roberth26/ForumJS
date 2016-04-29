define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Header    = require( 'Header/Header' );
    var Styles    = require( './Styles' );

	return Component.extend({
		render: function() {
			var props = this.getProps();
			var state = this.getState();

			return (
				$( '<li />', {
					css: Styles.post
				}).append([
					$( '<h2 />', {
						text: props.post.author,
						css: Styles.author
					}),
					$( '<div />', {
						text: props.post.content
					})
				])
			);
		}
	});
});