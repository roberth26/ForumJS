<?php
define( 'WP_USE_THEMES', false );
require_once( dirname( __FILE__ ) . '/../../wordpress/wp-load.php' );

$output = array();

$posts = get_posts( array(
	'post_type' => 'post',
	'post_status' => 'publish',
	'posts_per_page' => -1
));

foreach ( $posts as $post ) {
	$output[] = array(
		'id' => $post -> ID,
		'title' => $post -> post_title,
		'content' => $post -> post_content,
		'author' => get_userdata( get_post_field( 'post_author', $post -> ID ) ) -> data -> display_name,
		'date' => get_the_date( 'c', $post -> ID )
	);
}

echo json_encode( $output );