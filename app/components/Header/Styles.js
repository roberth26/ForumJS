define( function( require ) {
	var $            = require( 'jquery' );
	var GlobalStyles = require( 'GlobalStyles' ); 

	var btn = {
		color: 'white',
		float: 'right',
		lineHeight: '28px',
		height: 30,
		textDecoration: 'none',
		border: '1px solid white',
		padding: '0px 15px',
		marginTop: 5,
	    borderRadius: 3,
	    fontSize: '1.2rem',
	    cursor: 'pointer'
	};
	return {
		header: {
			background: GlobalStyles.gradient,
			height: 60,
			padding: '10px 0',
			marginBottom: 30
		},
		title: {
			float: 'left',
			fontSize: '2.4rem',
			lineHeight: '1',
			color: 'white',
			lineHeight: '40px',
			height: 40
		},
		repoBtn: btn,
		logoutBtn: $.extend( {}, btn, {
			marginRight: 10
		}),
		container: GlobalStyles.container
	};
});