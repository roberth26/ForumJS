define( function( require ) {
    var $              = require( 'jquery' );
    var Component      = require( 'Component' );
    var Header         = require( 'Header/Header' );
    var Styles         = require( './Styles' );
    var ThreadListItem = require( 'ThreadListItem/ThreadListItem' );

	return Component.extend({
		render: function() {
			var props = this.getProps();
			return (
				$( '<div />' ).append(
					Header({
						id: props.id + 'Header__',
						isLoggedIn: props.isLoggedIn,
						onLogout: props.onLogout
					})
				).append(
					$( '<div />', {
						css: Styles.container
					}).append([
						$( '<a />', {
							text: 'Create Thread',
							css: Styles.createThread,
							click: props.onCreateThread
						}),
						$( '<h2 />', {
							text: 'Hello ' + props.username,
							css: Styles.greeting
						}),
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
					])
				)
			);
		}
	});
});