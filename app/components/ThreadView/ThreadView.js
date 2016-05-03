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

			var replyBtn = $( '<a />', {
				text: 'Reply',
				href: location.hash + '/reply'
			});

			return (
				Page({
					id: props.id + 'Page__',
					title: thread ? thread.title : '',
					button: replyBtn,
					isLoggedIn: props.isLoggedIn,
					onLogout: props.onLogout,
					slideLeft: props.slideLeft,
					children: [
						$( '<div />', {
							css: Styles.openingPost
						}).append([
							$( '<h2 />', {
								text: thread.author,
								css: Styles.author
							}),
							$( '<div />', {
								text: thread.content,
								css: Styles.threadContent
							})
						]),
						$( '<h2 />', {
							text: thread.posts.length + ' Responses:',
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
						replyBtn.clone().css( Styles.replyBtn ),
						$( '<div style="clear:both;"></div>' )
					]
				})
			);
		}
	});
});