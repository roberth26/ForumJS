define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );

	return Component.extend({
		handleHashChange: function( e ) {
			e.preventDefault();
			this.render();
		},
		getMatchedRoute: function() {
			var hash = location.hash.substring( 1 );
			var props = this.getProps();
			var route = props.indexRoute;
			$.each( props.routes, function( index, theRoute ) {
				if ( hash.indexOf( theRoute.path ) > -1 ) {
					route = theRoute;
				}
			});
			return route;
		},
		componentWillUpdate: function() {
			window.onhashchange = this.handleHashChange;
			var route = this.getMatchedRoute();
			if ( route.redirect &&
				route.redirect.shouldRedirect &&
				route.redirect.shouldRedirect() )
			{
				location.hash = route.redirect.path;
			}
		},
		render: function() {
			return this.getMatchedRoute().component();
		}
	});
});