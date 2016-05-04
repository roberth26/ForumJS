define( function( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Styles    = require( './Styles' );

	return Component.extend({
		render: function() {
			var props = this.getProps();
			return (
				$( '<footer />', {
					css: Styles.footer
				}).append(
					$( '<div />', {
						css: Styles.container
					}).append([
						$( '<a />', {
							href: '#/',
							css: Styles.link
						}).append(
							$( '<h1 />', {
								html: 'Forum<strong>JS</strong>',
								css: Styles.title
							})
						),
						$( '<div />', {
							text: props.username + ' is logged in',
							css: Styles.username
						}),
						$( '<ul />', {
							css: Styles.menu
						}).append([
							$( '<li />', {
								css: Styles.menuItem
							}).append(
								$( '<a />', {
									text: 'Git Repository',
									href: 'https://github.com/roberth26/ForumJS',
									target: '_blank',
									css: Styles.link
								})
							),
							$( '<li />', {
								css: Styles.menuItem
							}).append(
								$( '<a />', {
									text: 'Log Out',
									click: props.onLogout,
									href: '#',
									css: Styles.link
								})
							)
						]),
						$( '<div />', {
							text: 'UI experiment by ',
							css: Styles.about
						}).append(
							$( '<a />', {
								text: 'Robert Hall',
								href: 'http://roberthall.co',
								target: '_blank',
								css: Styles.link
							})
						)
					])
				)
			);
		}
	});
});