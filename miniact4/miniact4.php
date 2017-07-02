<?php
/**
 * Plugin Name: Miniact
 */

add_action( 'wp_footer', function() {
	echo '<div id="miniact"></div>';
} );

add_action( 'wp_head', function() {
	wp_enqueue_style( 'app', plugins_url( '/build/style.css', __FILE__ ) );
	wp_enqueue_script( 'app', plugins_url( '/build/main.js', __FILE__ ), array(), false, true );

} );
