define( function( require ) {
    var $             = require( 'jquery' );
    var Component     = require( 'Component' );
    var Header        = require( 'Header/Header' );
    var DateFormatter = require( '../../util/DateFormatter' );
    var Styles        = require( './Styles' );

	return Component.extend({
		render: function() {
			var props = this.getProps();
			return (
				$( '<li />', {
					css: props.index % 2 == 0 ? Styles.listItem : Styles.listItemAlt,
					mouseenter: function() {
						$( this ).css( Styles.listItemHover );
					},
					mouseleave: function() {
						$( this ).css( props.index % 2 == 0 ? Styles.listItem : Styles.listItemAlt );
					}
				}).append(
					$( '<a />', {
						href: '#/threads/thread_id=' + props.thread.id,
						css: Styles.link
					}).append(
						$( '<div />', {
							css: Styles.date,
							text: DateFormatter.format( new Date( props.thread.date ) )
						}),
						$( '<div />', {
							text: props.thread.title,
							css: Styles.title
						}),
						$( '<div />', {
							text: 'Posted By: ' + props.thread.author,
							css: Styles.author
						})
					)
				)
			);
		}
	});
});