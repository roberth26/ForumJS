define( [ 'jquery' ], function( $ ) {
	function Component( props, templateComponent ) {

		this.componentWillUpdate = function() {}; // default componentWillUpdate

		// merge template component properties and methods to this object
		$.extend( true, this, templateComponent );

		// autobind methods
		$.each( this, function( key, value ) {
			if ( typeof value === 'function' ) {
				this[ key ] = value.bind( this );
			}
		}.bind( this ));

		var props = props;

		// public method that returns a clone of the props
		this.getProps = function() {
			return $.extend( true, {}, props );
		};

		var id = props.id;
		if ( !id ) {
			console.log( 'Provide an ID!' );
			id = 'Component_0' + Math.random() * 10000;
		}

		this.getId = function() {
			return id;
		}

		var $el = $().attr( 'data-id', id );

		var state = this.state ? this.state : {};
		delete this.state; // remove public access

		var $children = this.children;
		delete this.children; // remove public access

		// public method that returns a clone of the state
		this.getState = function() {
			return $.extend( true, {}, state );
		};

		// public method that sets the state and triggers a render
		this.setState = function( newState ) {
			$.extend( state, newState );
			this.render();
		};

		var componentWillUpdate = this.componentWillUpdate;
		delete this.componentWillUpdate; // remove public access

		var renderTemplate = this.render;

		this.render = function() {
			// query dom for node matching this id
			var oldElement = $( '*[data-id="' + id + '"]' );
			if ( oldElement.length ) { // if present in DOM already
				state = oldElement.data( 'state' ); // implant state
			}

			componentWillUpdate();

			var template = renderTemplate();
			$el.replaceWith( template );
			$el = template;		

			$el.data( 'state', state );
			$el.attr( 'data-id', id );
			return $el;
		};

		return this.render();
	}

	return {
		extend: function( component ) {
			return function( props ) {
				return new Component( props, component );
			}
	    },
	};
});