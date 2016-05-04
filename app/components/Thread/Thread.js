define( function( require ) {
    var $             = require( 'jquery' );
    var Component     = require( 'Component' );
    var Page          = require( 'Page/Page' );
    var Post          = require( 'Post/Post' );
    var DateFormatter = require( '../../util/DateFormatter' );
    var Styles        = require( './Styles' );

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
					Post({
						id: props.id + 'Post-' + ( index + 1 ) + '__',
						post: post
					})
				);
			});
		},
		render: function() {
			var props = this.getProps();
			var state = this.getState();
			var thread = this.getThread( props );

			var responseCount =	'';
			if ( thread ) {
				responseCount = thread.posts.length + ' Responses:';
				if ( thread.posts.length == 0 ) responseCount = 'No responses yet.';
				if ( thread.posts.length == 1 ) responseCount = '1 Response';
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
					slideLeft: props.slideLeft,
					username: props.username,
					children: [
						$( '<div />', {
							css: Styles.openingPost
						}).append([
							$( '<div />', {
								text: thread ? DateFormatter.format( thread.date ) : '',
								css: Styles.date
							}),
							$( '<h2 />', {
								text: thread ? thread.author : '',
								css: Styles.author
							}),
							$( '<div />', {
								text: thread ? thread.content : '',
								css: Styles.threadContent
							})
						]),
						$( '<h2 />', {
							text: responseCount,
							css: Styles.responses
						}),
						$( '<div />', {
							css: Styles.wrapper
						}).append(
							$( '<ul />', {
								css: Styles.list
							}).append(
								this.renderPosts( props, thread )
							)
						),
						$( '<a />', {
							text: 'Reply',
							href: location.hash + '/reply',
							css: Styles.replyBtn
						}),
						$( '<div style="clear:both;"></div>' )
					]
				})
			);
		}
	});
});