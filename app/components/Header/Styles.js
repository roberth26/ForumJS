define( function( require ) {
	var $            = require( 'jquery' );
	var GlobalStyles = require( 'GlobalStyles' ); 

	var btn = {
		color: GlobalStyles.mainFontColor,
		float: 'right',
		lineHeight: '30px',
		height: 30,
		textDecoration: 'none',
		border: '1px solid ' + GlobalStyles.mainFontColor,
		padding: '0px 15px',
		marginTop: 5,
	    borderRadius: 3,
	    fontSize: '1.2rem',
	    cursor: 'pointer'
	};
	return {
		header: {
			backgroundColor: 'rgb( 15, 33, 53 )',
			borderBottom: '1px solid black',
			height: 60,
			boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px',
			padding: '10px 0',
			marginBottom: 30
		},
		title: {
			float: 'left',
			fontSize: '2.4rem',
			lineHeight: '1',
			color: GlobalStyles.mainFontColor,
			textShadow: '0px -2px 0px black',
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