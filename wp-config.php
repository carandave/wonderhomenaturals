<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wonderhomenaturals' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'KC8=Rg^?*MhO3^&1GsSuJ.a*cR4u3dQ{OQj)jrQ(&Q2C9vY[ZB3~43+9D`rVNZG<' );
define( 'SECURE_AUTH_KEY',  'hAyC!,H)MG[cPdix|Lh=-H=44eKh+sV5XOOr.h+ttwyGO3!ItPqJcU)S)#71hNx&' );
define( 'LOGGED_IN_KEY',    '-mdSWLe)TY]Xo6Ai~gu3Q d=kJNFziUupfU<cqmZe:,kx^D(Qy%vJj}8]XB0nXxF' );
define( 'NONCE_KEY',        ' A?Eg$RA;ypvSMJV0C!(+w!}=|ehu]4:lu[ES2_*fy26c9JaH4Y;!qIA0o+,2M-t' );
define( 'AUTH_SALT',        '~H1(Iy0?8=Fl-(FbXOUSyoW9a!,snD@/rd+pdxeA|pnj)Ogf{Mj[vJ/`oK#GO^@ ' );
define( 'SECURE_AUTH_SALT', 'kRm&0EJhhI}q-NH1p}}d2=V?$Si[?:s=peT!tnxI$)pKB!i2U:[@;2DnNTuDwRAQ' );
define( 'LOGGED_IN_SALT',   'OS!yTDF|7.35C;iTRK}5]pP2s=^xA<_D3XR$5f_GH&w?S1^@3H$j3vO1_eM(HYBl' );
define( 'NONCE_SALT',       'hQn@7-@(d[,#CpHvp:D8/8?OMpAsf=_5xhjj(&(Y4uT)@z2uuf[_WIx2.yiFy,#-' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
