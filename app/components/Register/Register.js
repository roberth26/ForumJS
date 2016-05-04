define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Header    = require( 'Header/Header' );
    var Footer    = require( 'Footer/Footer' );
    var Styles    = require( './Styles' );

	return Component.extend({
		handleSubmit: function( e ) {
			e.preventDefault();
			var formData = $( e.target ).serializeArray();
			this.getProps().onRegisterUser( formData[ 0 ].value );
		},
		render: function() {
			var props = this.getProps();
			return (
				$( '<div />', {
					css: Styles.page
				}).append([
					Header({
						id: props.id + 'Header__',
						isLoggedIn: props.isLoggedIn,
						onLogout: props.onLogout,
						css: Styles.header
					}),
					$( '<div />', {
						css: Styles.container
					}).append(
						$( '<h1 />', {
							text: 'Register',
							css: Styles.title
						})
					).append(
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
									placeholder: 'username',
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
									placeholder: 'password',
									css: Styles.input
								})
							]),
							$( '<div />', {
								css: Styles.inputGroup
							}).append([
								$( '<div />', {
									text: 'Email',
									css: Styles.label
								}),
								$( '<input />', {
									type: 'email',
									name: 'email',
									placeholder: 'email',
									css: Styles.input
								})
							]),
							$( '<button />', {
								type: 'submit',
								text: 'Register',
								css: Styles.registerBtn
							})
						])
					)
				])
			);
		}
	});
});