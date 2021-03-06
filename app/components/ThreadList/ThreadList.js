define( function( require ) {
    var $              = require( 'jquery' );
    var Component      = require( 'Component' );
    var Page           = require( 'Page/Page' );
    var ThreadListItem = require( 'ThreadListItem/ThreadListItem' );
    var Styles         = require( './Styles' );

	return Component.extend({
		render: function() {
			var props = this.getProps();
			var threads = props.threads;
			threads.sort( function( a, b ) {
				return new Date( b.date ) - new Date( a.date );
			});
			return (
				Page({
					id: props.id + 'Page__',
					title: 'Hello ' + props.username,
					isLoggedIn: props.isLoggedIn,
					onLogout: props.onLogout,
					slideLeft: props.slideLeft,
					username: props.username,
					button: $( '<a />', {
						text: 'Create Thread',
						href: '#/threads/create'
					}),
					children: [
						$( '<div />', {
							css: Styles.wrapper
						}).append(
							$( '<ul />', {
								css: Styles.list
							}).append(
								threads.sort( function( a, b ) {
									return new Date( b.date ) - new Date( a.date );
								}).map( function( thread, index ) {
									return (
										ThreadListItem({
											id: props.id + 'ThreadListItem_' + index + '__',
											thread: thread,
											index: index
										})
									);
								}.bind( this ))
							)
						)
					]
				})
			);
		}
	});
});