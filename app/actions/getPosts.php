<?php
define( 'WP_USE_THEMES', false );
require_once( dirname( __FILE__ ) . '/../../wordpress/wp-load.php' );

$data = json_decode( file_get_contents( 'php://input' ) );

$thread_id = $data -> thread_id;

$comments = get_comments( array(
	'post_id' => $thread_id
));

$output = array();



echo json_encode( $output );