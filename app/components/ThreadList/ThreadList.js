define( function( require ) {
    var $              = require( 'jquery' );
    var Component      = require( 'Component' );
    var Page           = require( 'Page/Page' );
    var ThreadListItem = require( 'ThreadListItem/ThreadListItem' );
    var Styles         = require( './Styles' );

	return Component.extend({
		render: function() {
			var props = this.getProps();

			return (
				Page({
					id: props.id + 'Page__',
					title: 'Hello ' + props.username,
					isLoggedIn: props.isLoggedIn,
					onLogout: props.onLogout,
					button: $( '<a />', {
						text: 'Create Thread',
						href: '#/threads/create'
					}),
					children: [
						$( '<ul />' ).append(
							props.threads.map( function( thread, index ) {
								return (
									ThreadListItem({
										id: props.id + 'ThreadListItem_' + index + '__',
										thread: thread,
										index: index
									})
								);
							}.bind( this ))
						)
					]
				})
			);
		}
	});
});