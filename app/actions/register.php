<?php
define( 'WP_USE_THEMES', false );
require_once( dirname( __FILE__ ) . '/wordpress/wp-load.php' );

$data = json_decode( file_get_contents( 'php://input' ) );

$username = $data -> username;
$password = $data -> password;
$email = $data -> email;

if ( !username_exists( $username ) && !email_exists( $email ) ) {
	wp_create_user( $username, $password, $email );
	echo json_encode( array( 'success' => true ) );
} else {
	echo json_encode( array(
		'success' => false,
		'message' => 'The supplied username and/or email already exists.'
	));
}