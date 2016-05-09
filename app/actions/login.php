<?php
define( 'WP_USE_THEMES', false );
require_once( dirname( __FILE__ ) . '/wordpress/wp-load.php' );

$data = json_decode( file_get_contents( 'php://input' ) );

$username = $data -> username;
$password = $data -> password;

$creds = array(
	'user_login'    => $username,
	'user_password' => $password,
	'rememember'    => false
);
 
$login = wp_signon( $creds, false );

if ( $login instanceof WP_User ) {
	echo json_encode( array(
		'success' => true
	));
} else {
	echo json_encode( array(
		'success' => false,
		'message' => 'Login failed'
	));
}