define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Header    = require( 'Header/Header' );
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

			var posts = thread.posts.map( function( post, index ) {
				return (
					$( '<li />', {
						html: post.content
					})
				);
			});

			return (
				$( '<div />' ).append([
					Header({
						id: props.id + 'Header__'
					}),
					$( '<div />', {
						css: Styles.container
					}).append([
						$( '<h1 />', {
							text: thread.name,
							css: Styles.threadTitle
						}),
						$( '<ul />' ).append(
							posts
						)
					])
				])
			);
		}
	});
});