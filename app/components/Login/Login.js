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
			this.getProps().onLogin( formData[ 0 ].value );
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
						css: Styles.container,
						onload: function() {
							Styles.pageTransition( $( this ), props.slideLeft );
						}
					}).append(
						$( '<h1 />', {
							text: 'Login',
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
							$( '<button />', {
								type: 'submit',
								text: 'Login',
								css: Styles.loginBtn
							}),
							$( '<a />', {
								text: 'Register',
								href: '#/register',
								css: Styles.registerBtn
							})
						])
					)
				])
			);
		}
	});
});