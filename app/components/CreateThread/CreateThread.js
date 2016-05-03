define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Page      = require( 'Page/Page' );
    var Styles    = require( './Styles' );

	return Component.extend({
		handleSubmit: function( e ) {
			e.preventDefault();
			var formData = $( e.target ).serializeArray();
			this.getProps().onCreateThread(
				formData.reduce( function( object, value, index ) {
					object[ value.name ] = value.value;
					return object;
				}, {} )
			);
		},
		render: function() {
			var props = this.getProps();

			return (
				Page({
					id: props.id + 'Page__',
					title: 'New Thread',
					isLoggedIn: props.isLoggedIn,
					onLogout: props.onLogout,
					slideLeft: props.slideLeft,
					children: [
						$( '<form />', {
							submit: this.handleSubmit
						}).append([
							$( '<div />', {
								css: Styles.inputGroup
							}).append([
								$( '<div />', {
									text: 'Title:',
									css: Styles.label
								}),
								$( '<input />', {
									type: 'text',
									name: 'title',
									css: Styles.input
								})
							]),
							$( '<div />', {
								css: Styles.inputGroup
							}).append([
								$( '<div />', {
									text: 'Content:',
									css: Styles.label
								}),
								$( '<textarea />', {
									name: 'content',
									css: Styles.textarea
								})
							]),
							$( '<button />', {
								type: 'submit',
								text: 'Create',
								css: Styles.button
							}),
							$( '<div style="clear:both;"></div>' )
						])
					]
				})
			);
		}
	});
});