define( function( require ) {
    var $          = require( 'jquery' );
    var Component  = require( 'Component' );
    var ThreadList = require( 'ThreadList/ThreadList' );
    var ThreadView = require( 'ThreadView/ThreadView' );

	return Component.extend({
		state: {
			component: null
		},
		handleHashChange: function( e ) {
			e.preventDefault();
			this.setState({
				component: this.getMatchedComponent()
			});
		},
		getMatchedComponent: function() {
			var hash = location.hash.substring( 1 );
			var props = this.getProps();
			var component = props.indexRoute.component();
			$.each( props.routes, function( index, route ) {
				if ( hash == '/' ) {
					return false; // already index route component
				} else if ( hash.indexOf( route.path ) > -1 ) {
					component = route.component();
					return false;
				}
			});
			return component;
		},
		render: function() {
			console.log( 'Router.render()' );
			window.onhashchange = this.handleHashChange;
			var state = this.getState();
			var component = state.component;
			if ( component == null )
				component = this.getMatchedComponent();
			return (
				$( '<div />' ).append(
					component
				)
			);
		}
	});
});