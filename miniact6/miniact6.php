<?php
/**
 * Plugin Name: Miniact
 */

add_action( 'widgets_init', function () {
	register_widget( 'Miniact' );
} );

add_shortcode( 'miniact', function () {
	return miniact_insert();
} );

class Miniact extends WP_Widget {
	function __construct() {
		parent::__construct( 'miniact', 'Miniact' );
	}
	function widget() {
		echo miniact_insert();
	}
}

function miniact_insert() {
	static $miniact_inserted;
	if ( ! isset( $miniact_inserted ) ) {
		$miniact_inserted = true;
		wp_enqueue_style( 'app', plugins_url( '/build/style.css', __FILE__ ) );
		wp_enqueue_script( 'app', plugins_url( '/build/main.js', __FILE__ ), array(), false, true );
		wp_localize_script( 'app', 'Miniact', [ 'wpRestApi' => esc_url_raw( rest_url() ) ] );
		return '<div id="miniact"></div>';
	}
	return '';
}