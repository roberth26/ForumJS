define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Styles    = require( './Styles' );

	return Component.extend({
		render: function() {
			var props = this.getProps();
			return (
				$( '<header />', {
					css: Styles.header
				}).append(
					$( '<div />', {
						css: Styles.container
					}).append([
						$( '<a />', {
							href: '#/'
						}).append(
							$( '<h1 />', {
								text: 'ForumJS',
								css: Styles.title
							})
						),
						$( '<a />', {
							text: 'Repo',
							href: 'https://github.com/roberth26/ForumJS',
							target: '_blank',
							css: Styles.repoBtn
						}),
						!props.isLoggedIn ? null :
						$( '<a />', {
							text: 'Log Out',
							css: Styles.logoutBtn,
							click: props.onLogout
						})
					])
				)
			);
		}
	});
});