define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Page      = require( 'Page/Page' );
    var Styles    = require( './Styles' );

	return Component.extend({
		handleSubmit: function( thread, props, e ) {
			console.log( thread );
			e.preventDefault();
			var formData = $( e.target ).serializeArray();
			this.getProps().onReply( thread.id, formData[ 0 ].value );
		},
		render: function() {
			var props = this.getProps();
			var thread = props.getCurrentThread();

			return (
				Page({
					id: props.id + 'Page__',
					title: 'Reply to',
					isLoggedIn: props.isLoggedIn,
					onLogout: props.onLogout,
					children: [
						$( '<h2 />', {
							text: thread.title,
							css: Styles.title
						}),
						$( '<form />', {
							submit: this.handleSubmit.bind( null, thread, props )
						}).append([
							$( '<textarea />', {
								name: 'content',
								css: Styles.textarea
							}),
							$( '<button />', {
								type: 'submit',
								text: 'Submit',
								css: Styles.submitBtn
							}),
							$( '<div style="clear:both;"></div>' )
						])
					]
				})
			);
		}
	});
});