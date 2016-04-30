define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Header    = require( 'Header/Header' );
    var Styles    = require( './Styles' );

	return Component.extend({
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
					}).append(
						props.children
					)
				])
			);
		}
	});
});