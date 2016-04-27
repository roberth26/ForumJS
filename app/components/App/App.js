define( function( require ) {
    var $          = require( 'jquery' );
    var Component  = require( 'Component' );
    var Router     = require( 'Router/Router' );
    var ThreadList = require( 'ThreadList/ThreadList' );
    var ThreadView = require( 'ThreadView/ThreadView' );

	return Component.extend({
		render: function() {
			var props = this.getProps();
			return (
				$( '<div />' ).append(
					Router({
						id: props.id + 'Router__',
						indexRoute: {
							component: function() {
								return new ThreadList({
									id: props.id + 'Router__ThreadList__',
									threads: props.threads
								});
							}
						},
						routes: [
							{
								path: '/thread_id=',
								component: function() {
									return new ThreadView({
										id: props.id + 'Router__ThreadView__',
										threads: props.threads
									});
								}
							}
						]
					})
				)
			);
		}
	});
});