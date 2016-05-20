<?php
define( 'WP_USE_THEMES', false );
require_once( dirname( __FILE__ ) . '/../../wordpress/wp-load.php' );

$data = json_decode( file_get_contents( 'php://input' ) );

$postid = $data -> postid;
$content = $data -> content;
$userid = $data -> userid;

$id = wp_new_comment( array(
	'comment_post_ID' => $postid,
	'comment_content' => $content, 
	'comment_type' => '',
	'comment_parent' => 0,
	'user_id' => $userid
));

include 'getThreads.php';