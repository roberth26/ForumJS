define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Header    = require( 'Header/Header' );
    var Styles    = require( './Styles' );

	return Component.extend({
		render: function() {
			var props = this.getProps();
			return (
				$( '<div />' ).append(
					Header({
						id: props.id + 'Header__'
					})
				).append(
					$( '<div />', {
						css: Styles.container
					}).append(
						$( '<ul />' ).append(
							props.threads.map( function( thread, index ) {
								return (
									$( '<li />', {

									}).append(
										$( '<a />', {
											href: '#/thread_id=' + thread.id,
											text: thread.name
										})
									)
								);
							}.bind( this ))
						)
					)
				)
			);
		}
	});
});