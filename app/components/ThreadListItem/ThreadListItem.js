define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Header    = require( 'Header/Header' );
    var Styles    = require( './Styles' );

	return Component.extend({
		render: function() {
			var props = this.getProps();
			return (
				$( '<li />', {
					css: props.index % 2 == 0 ? Styles.listItem : Styles.listItemAlt
				}).append([
					$( '<div />', {
						text: 'By: ' + props.thread.author,
						css: Styles.author
					}),
					$( '<a />', {
						href: '#/threads/thread_id=' + props.thread.id,
						text: props.thread.title
					})
				])
			);
		}
	});
});