<?php

/* Loads parent stylesheet */
add_action( 'wp_enqueue_scripts', 'wpchild_enqueue_styles' );
function wpchild_enqueue_styles(){
  wp_enqueue_style( 'wpm-neve-style', get_template_directory_uri() . '/style.css' );
}


// Logo Change Start
function add_logo_Login_page(){
	wp_enqueue_style('custom-login', get_stylesheet_directory_uri() . '/style.css');

}

add_action('login_enqueue_scripts', 'add_logo_Login_page');
// Logo Change End

//Logo Set URL Start
function login_page_url(){
	return home_url('/wp-admin');
}

add_filter('login_headerurl', 'login_page_url');
//Logo Set URL End


  
// function wtwh_delay_remove_result_count() {
//    remove_action('woocommerce_after_shop_loop', 'woocommerce_result_count', 20);
//    remove_action('woocommerce_before_shop_loop', 'woocommerce_result_count', 20);
// }

// add_action('wp', 'wtwh_delay_remove_result_count');

function wtwh_remove_result_count() {
    remove_action('woocommerce_before_shop_loop', 'woocommerce_result_count', 20);
    remove_action('woocommerce_after_shop_loop', 'woocommerce_result_count', 20);
}
add_action('template_redirect', 'wtwh_remove_result_count');



