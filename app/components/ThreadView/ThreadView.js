define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Header    = require( 'Header/Header' );
    var PostView  = require( 'PostView/PostView' );
    var Styles    = require( './Styles' );

	return Component.extend({
		render: function() {
			var props = this.getProps();
			var state = this.getState();
			
			var id = location.hash.split( 'thread_id=' ).pop();

			var thread = {
				name: 'test',
				content: 'asassasa'
			};
			thread = props.threads.filter( function( thread ) {
				return thread.id.toString() === id.toString();
			})[ 0 ];

			var posts = !thread ? null : thread.posts.map( function( post, index ) {
				return (
					PostView({
						id: props.id + 'PostView-' + index + '__',
						post: post
					})
				);
			});

			return (
				$( '<div />' ).append([
					Header({
						id: props.id + 'Header__',
						isLoggedIn: props.isLoggedIn,
						onLogout: props.onLogout
					}),
					$( '<div />', {
						css: Styles.container
					}).append([
						$( '<h1 />', {
							text: thread ? thread.name : '',
							css: Styles.threadTitle
						}),
						$( '<div />', {
							css: Styles.wrapper
						}).append(
							$( '<ul />', {
								css: Styles.list
							}).append(
								posts
							)
						)
					])
				])
			);
		}
	});
});