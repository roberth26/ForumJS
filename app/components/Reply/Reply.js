define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Page      = require( 'Page/Page' );
    var Styles    = require( './Styles' );

	return Component.extend({
		handleSubmit: function( e ) {
			e.preventDefault();
			var formData = $( e.target ).serializeArray();
			this.getProps().onLogin( formData[ 0 ].value );
		},
		render: function() {
			var props = this.getProps();
			return (
				Page({
					id: props.id + 'Page__',
					title: 'Reply',
					isLoggedIn: props.isLoggedIn,
					onLogout: props.onLogout,
					children: [
						$( '<form />', {
							css: Styles.form,
							submit: this.handleSubmit
						}).append([
							$( '<div />', {
								css: Styles.inputGroup
							}).append([
								$( '<div />', {
									text: 'Username',
									css: Styles.label
								}),
								$( '<input />', {
									type: 'text',
									name: 'username',
									css: Styles.input
								})
							]),
							$( '<div />', {
								css: Styles.inputGroup
							}).append([
								$( '<div />', {
									text: 'Password',
									css: Styles.label
								}),
								$( '<input />', {
									type: 'password',
									name: 'password',
									css: Styles.input
								})
							]),
							$( '<div />', {
								css: Styles.register
							}).append([
								$( '<span />', {
									text: 'Register',
									css: Styles.label
								}),
								$( '<input />', {
									type: 'checkbox',
									name: 'register',
									css: Styles.checkbox
								})
							]),
							$( '<button />', {
								type: 'submit',
								text: 'Login',
								css: Styles.button
							})
						])
					]
				})
			);
		}
	});
});