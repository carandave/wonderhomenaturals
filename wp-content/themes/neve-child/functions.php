<?php

// Loads parent script codes
function custom_child_theme_scripts() {
    // Enqueue the script
    wp_enqueue_script( 'custom-script', get_stylesheet_directory_uri() . '/script.js', array(), null, true  );
}
add_action( 'wp_enqueue_scripts', 'custom_child_theme_scripts' );


/* Loads parent stylesheet */
function wpchild_enqueue_styles(){
  wp_enqueue_style( 'wpm-neve-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'wpchild_enqueue_styles' );


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



// START add text under the Cart Coupon
function add_paragraph_under_coupon_button() {
    echo '<div style="width: 100%; display flex; justify-content: center; align-items: center; margin-top: -50px!important; margin-bottom: 60px !important; font-family: Poppins; font-size: 16px"><p style="width: 80%; text-align:center; ">For first time order, you can use <b>FIRSTTIMEORDER</b> code for free shipping. (P1500 min. spend and P2000 max. spend)</p></div>';
}
add_action( 'woocommerce_after_cart_table', 'add_paragraph_under_coupon_button');
// END add text under the Cart Coupon


/* Custom Shipping Method Description */
// function custom_shipping_desc( $method ) {
//     if ( $method -> id === 'local_pickup:2' ) {
//         echo '<p class="ship_desc"><b> Note: </b>3-5 days via logistics</p>';
//     }
// }
// add_action( 'woocommerce_after_shipping_rate', 'custom_shipping_desc' );
















