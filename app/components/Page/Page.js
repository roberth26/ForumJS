define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Row       = require( 'Row/Row' );
    var Header    = require( 'Header/Header' );
    var Footer    = require( 'Footer/Footer' );
    var Styles    = require( './Styles' );

	return Component.extend({
		render: function() {
			var props = this.getProps();
			return (
				$( '<div />', {
					css: Styles.page
				}).append([
					Header({
						id: props.id + 'Header__',
						isLoggedIn: props.isLoggedIn,
						onLogout: props.onLogout
					}),
					$( '<div />', {
						css: Styles.container,
						onload: function() {
							Styles.pageTransition( $( this ), props.slideLeft );
						}
					}).append(
						Row({
							id: props.id + 'Row__',
							children: [
								$( '<div />', {
									'class': 'col_6'
								}).append(
									$( '<h1 />', {
										text: props.title,
										css: Styles.title
									})
								),
								$( '<div />', {
									'class': 'col_6'
								}).append(
									props.button ? props.button.css( Styles.button ) : null
								)
							]
						})
					).append(
						props.children
					)
				]).append(
					Footer({
						id: props.id + 'Footer__',
						isLoggedIn: props.isLoggedIn,
						onLogout: props.onLogout,
						username: props.username
					})
				)
			);
		}
	});
});