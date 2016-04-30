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
					children: [
						$( '<form />', {
							submit: this.handleSubmit
						}).append([
							$( '<div />', {
								css: Styles.inputGroup
							}).append([
								$( '<div />', {
									text: 'Thread Title:'
								}),
								$( '<input />', {
									type: 'text',
									name: 'title'
								})
							]),
							$( '<div />', {
								css: Styles.inputGroup
							}).append([
								$( '<div />', {
									text: 'content:'
								}),
								$( '<textarea />', {
									name: 'content'
								})
							]),
							$( '<button />', {
								type: 'submit',
								text: 'Create',
								css: Styles.button
							})
						])
					]
				})
			);
		}
	});
});