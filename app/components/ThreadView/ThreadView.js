define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Page      = require( 'Page/Page' );
    var PostView  = require( 'PostView/PostView' );
    var Styles    = require( './Styles' );

	return Component.extend({
		getThread: function( props ) {
			var id = location.hash.split( 'thread_id=' ).pop();
			return props.threads.find( function( thread ) {
				return thread.id == id;
			});
		},
		renderPosts: function( props, thread ) {
			return !thread ? null : thread.posts.map( function( post, index ) {
				return (
					PostView({
						id: props.id + 'PostView-' + ( index + 1 ) + '__',
						post: post
					})
				);
			});
		},
		render: function() {
			var props = this.getProps();
			var state = this.getState();
			var thread = this.getThread( props );
			if ( thread ) {
				thread.posts.unshift({
					author: thread.author,
					content: thread.content,
					data: thread.data
				});
			}

			return (
				Page({
					id: props.id + 'Page__',
					title: thread ? thread.title : '',
					button: $( '<a />', {
						text: 'Reply',
						href: location.hash + '/reply'
					}),
					isLoggedIn: props.isLoggedIn,
					onLogout: props.onLogout,
					children: [
						$( '<div />', {
							css: Styles.wrapper
						}).append(
							$( '<ul />', {
								css: Styles.list
							}).append(
								this.renderPosts( props, thread )
							)
						)
					]
				})
			);
		}
	});
});