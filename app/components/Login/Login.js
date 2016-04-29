define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Header    = require( 'Header/Header' );
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
				$( '<div />' ).append([
					Header({
						id: props.id + 'Header__',
						isLoggedIn: props.isLoggedIn
					}),
					$( '<div />', {
						css: Styles.container
					}).append([
						$( '<div />', {
							csss: Styles.modal
						}).append(
							$( '<form />', {
								submit: this.handleSubmit
							}).append([
								$( '<div />', {
									css: Styles.inputGroup
								}).append([
									$( '<div />', {
										text: 'Username:'
									}),
									$( '<input />', {
										type: 'text',
										name: 'username'
									})
								]),
								$( '<div />', {
									css: Styles.inputGroup
								}).append([
									$( '<div />', {
										text: 'Password:'
									}),
									$( '<input />', {
										type: 'password',
										name: 'password'
									})
								]),
								$( '<button />', {
									type: 'submit',
									text: 'Login',
									css: Styles.button
								})
							])
						)
					])
				])
			);
		}
	});
});