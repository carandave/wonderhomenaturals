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


  

// Start Remove Count of Products in Product Page
function wtwh_remove_result_count() {
    remove_action('woocommerce_before_shop_loop', 'woocommerce_result_count', 20);
    remove_action('woocommerce_after_shop_loop', 'woocommerce_result_count', 20);
}
add_action('template_redirect', 'wtwh_remove_result_count');
// End Remove Count of Products in Product Page



/* Start Custom Order Status */
function register_custom_order_statuses() {
    // Shipped status
    register_post_status( 'wc-shipped', array(
        'label'                     => 'Shipped',
        'public'                    => true,
        'show_in_admin_status_list' => true,
        'show_in_admin_all_list'    => true,
        'exclude_from_search'       => false,
        'label_count'               => _n_noop( 'Shipped <span class="count">(%s)</span>', 'Shipped <span class="count">(%s)</span>' )
    ) );
    
    // Delivered status
    register_post_status( 'wc-delivered', array(
        'label'                     => 'Delivered',
        'public'                    => true,
        'show_in_admin_status_list' => true,
        'show_in_admin_all_list'    => true,
        'exclude_from_search'       => false,
        'label_count'               => _n_noop( 'Delivered <span class="count">(%s)</span>', 'Delivered <span class="count">(%s)</span>' )
    ) );
}
add_action( 'init', 'register_custom_order_statuses' );

function add_custom_statuses_to_order_statuses( $order_statuses ) {
    $new_order_statuses = array();
    foreach ( $order_statuses as $key => $status ) {
        $new_order_statuses[ $key ] = $status;
        if ( 'wc-processing' === $key ) {
            $new_order_statuses['wc-shipped'] = 'Shipped';
            $new_order_statuses['wc-delivered'] = 'Delivered';
        }
    }
    return $new_order_statuses;
}
add_filter( 'wc_order_statuses', 'add_custom_statuses_to_order_statuses' );

    /* Enqueue to run the css in style.css about Custom Order Status Color*/
    function custom_enqueue_styles() {
        wp_enqueue_style( 'custom-styles', get_stylesheet_directory_uri() . '/style.css' );
    }
    add_action( 'admin_head', 'custom_enqueue_styles' );

/* End Custom Order Status */


// Start Display the Attributes of a product in Single Product
add_action( 'woocommerce_single_product_summary', 'display_custom_product_attributes', 20 );
function display_custom_product_attributes() {
    global $product;
    $attributes = $product->get_attributes();

    if ( ! $attributes ) {
        return;
    }

    echo '<ul class="custom-attributes">';

    foreach ( $attributes as $attribute ) {
        if ( $attribute->get_variation() ) {
            continue;
        }

        $name = wc_attribute_label( $attribute->get_name() );
        $value = wc_get_product_terms( $product->get_id(), $attribute->get_name(), array( 'fields' => 'names' ) );

        echo '<li><strong>' . $name . ':</strong> ' . implode( ', ', $value ) . '</li>';
    }

    echo '</ul>';
}
// End Display the Attributes of a product in Single Product


// Start Add BUY NOW button beside ADD TO CART in Single Product
function add_buy_now_button() {
    global $product;

    if ( $product->is_type( 'simple' ) ) { 
        $buy_now_url = add_query_arg( 'buy_now', $product->get_id(), $product->add_to_cart_url() );

        echo '<a href="' . esc_url( $buy_now_url ) . '" class="single_add_to_cart_button button alt">Buy Now</a>';
    }
}

add_action( 'woocommerce_after_add_to_cart_button', 'add_buy_now_button' );


function handle_buy_now() {
    if ( ! isset( $_GET['buy_now'] ) ) {
        return;
    }

    $product_id = absint( $_GET['buy_now'] );

    if ( $product_id > 0 ) {
        WC()->cart->empty_cart();
        WC()->cart->add_to_cart( $product_id );
        wp_safe_redirect( wc_get_checkout_url() );
        exit;
    }
}

add_action( 'template_redirect', 'handle_buy_now' );

// END Add BUY NOW button beside ADD TO CART in Single Product










