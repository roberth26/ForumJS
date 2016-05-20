<?php
define( 'WP_USE_THEMES', false );
require_once( dirname( __FILE__ ) . '/../../wordpress/wp-load.php' );

$data = json_decode( file_get_contents( 'php://input' ) );

$title = $data -> title;
$content = $data -> content;
$userid = $data -> userid;

wp_insert_post( array(
	'post_title'   => wp_strip_all_tags( $title ),
	'post_content' => $content,
	'post_author'  => $userid,
	'post_status'  => 'publish'
));

include 'getThreads.php';