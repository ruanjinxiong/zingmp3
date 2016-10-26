<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'zingmp3');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '_>&0(d2%CptOCXnK_ (t__+G;wca&=;qyR-o9-s@,fyE}q8/I~wrTuo7-Q#WxINl');
define('SECURE_AUTH_KEY',  'sZ0xC=@g`>|J -5|,Y9r*O_[{St;w xoc-3eMwb5P{H>awue<K/]7!$DX; 2 jvC');
define('LOGGED_IN_KEY',    'xay|&h0j.H+V,4.-hQK9?7AW;9W-q68KZM8#m i$oApYAh`(G7om0<]JL&*P,Ff7');
define('NONCE_KEY',        'R@0Ck,XWF,)V-PM1U%,%Ni`lyR*B+_Teic|>r)nkB,G}VB+KMPk(Dy[tEe1J}Pu7');
define('AUTH_SALT',        '&YPb$=R.!+_p&$r>F!TA=oD VQbfx@}!T#y=gP6CGg)D&dR+j%#@J$H)[|EJ~{gU');
define('SECURE_AUTH_SALT', 'Hb0+X.wku/VQ{!>VZ,5rJ2G2syR{cpZM&R~#;=1*x;mCs@eu.OBu>sOl,8djq5l9');
define('LOGGED_IN_SALT',   'qN0}<raVr1P{-jQ+j~xFv+/[zbj*N-D,C_M+B+Khj i(5QdKw6bEvDLa #-z|0H`');
define('NONCE_SALT',       'fF#d]DoX+}@MY-S%uZZO|9<#8<T1y3?.{j|ro,7do$N)j%Jo,j/Fhd|iI1n*+^tC');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
