<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>
<li <?php wc_product_class( '', $product ); ?>>
	<?php
	/**
	 * Hook: woocommerce_before_shop_loop_item.
	 *
	 * @hooked woocommerce_template_loop_product_link_open - 10
	 */
	do_action( 'woocommerce_before_shop_loop_item' );

	/**
	 * Hook: woocommerce_before_shop_loop_item_title.
	 *
	 * @hooked woocommerce_show_product_loop_sale_flash - 10
	 * @hooked woocommerce_template_loop_product_thumbnail - 10
	 */
	do_action( 'woocommerce_before_shop_loop_item_title' );

	/**
	 * Hook: woocommerce_shop_loop_item_title.
	 *
	 * @hooked woocommerce_template_loop_product_title - 10
	 */
	do_action( 'woocommerce_shop_loop_item_title' );

	// Custom code to display product attributes.
	
	// Start Displaying of Attributes (Scent and Size) under the Title of Product
	$attributes = $product->get_attributes();

	if ( $attributes ) {
	    echo '<ul class="custom-attributes" style="background-color: #00895B; text-align: center; font-size: 12px; color: #F1F8E0; border-radius: 5px; padding-top: 5px; padding-bottom: 5px; display: flex; justify-content: center; align-items: center;">';
	    foreach ( $attributes as $attribute ) {
	        if ( $attribute->get_variation() ) {
	            continue;
	        }

	        
	        $value = wc_get_product_terms( $product->get_id(), $attribute->get_name(), array( 'fields' => 'names' ) );

	        echo '<li style="margin: 0; padding: 0; margin-right: 5px; margin-left: 5px;" >' . esc_html( implode( ', ', $value ) ) . '</li>';
	    }
	    echo '</ul>';
	}




	
	
	

	// End Displaying of Attributes (Scent and Size) under the Title of Product

	/**
	 * Hook: woocommerce_after_shop_loop_item_title.
	 *
	 * @hooked woocommerce_template_loop_rating - 5
	 * @hooked woocommerce_template_loop_price - 10
	 */
	do_action( 'woocommerce_after_shop_loop_item_title' );

	/**
	 * Hook: woocommerce_after_shop_loop_item.
	 *
	 * @hooked woocommerce_template_loop_product_link_close - 5
	 * @hooked woocommerce_template_loop_add_to_cart - 10
	 */
	do_action( 'woocommerce_after_shop_loop_item' );
	?>
</li>
