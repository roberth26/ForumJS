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
    $comments = get_comments( array(
        'post_id' => $post -> ID,
        'order' => 'ASC'
	));
    $replies = array();
    foreach ( $comments as $comment ) {
    	$replies[] = array(
    		'author' => get_comment_author( $comment -> ID ),
    		'content' => $comment -> comment_content,
    		'date' => get_comment_date( 'D M d Y H:i:s O', $comment -> comment_ID )
		);
    }
	$output[] = array(
		'id' => $post -> ID,
		'title' => $post -> post_title,
		'content' => $post -> post_content,
		'author' => get_userdata( get_post_field( 'post_author', $post -> ID ) ) -> data -> display_name,
		'date' => get_the_date( 'D M d Y H:i:s O', $post -> ID ),
		'posts' => $replies
	);
}

echo json_encode( $output );