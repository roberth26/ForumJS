define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Header    = require( 'Header/Header' );
    var Footer    = require( 'Footer/Footer' );
    var Styles    = require( './Styles' );

	return Component.extend({
		state: {
			errors: []
		},
		handleSubmit: function( e ) {
			e.preventDefault();
			var formData = $( e.target ).serializeArray();
			var errors = formData.filter( function( item ) {
				return !item.value;
			}).map( function( item, index ) {
				return item.name;
			});
			if ( errors.length ) {
				this.setState({
					errors: errors
				})
			} else {
				this.getProps().onRegisterUser(
					formData[ 0 ].value,
					formData[ 1 ].value,
					formData[ 2 ].value
				);
			}
		},
		render: function() {
			var props = this.getProps();
			var state = this.getState();

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
									css: state.errors.indexOf( 'username' ) < 0 ? Styles.input : Styles.error
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
									css: state.errors.indexOf( 'password' ) < 0 ? Styles.input : Styles.error
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
									css: state.errors.indexOf( 'email' ) < 0 ? Styles.input : Styles.error
								})
							]),
							$( '<button />', {
								type: 'submit',
								text: 'Register',
								css: Styles.registerBtn
							}),
							$( '<a />', {
								text: 'Have an account?',
								css: Styles.accountBtn,
								href: '#/login'
							})
						])
					)
				])
			);
		}
	});
});