<?php

function theme_enqueue_scripts() {
    //FIRST
    wp_enqueue_style( 'divi-style', get_template_directory_uri() . '/style.css' );


    wp_enqueue_style( 'elevate-style', get_stylesheet_directory_uri() . '/style.css', array( 'divi-style' ) );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_scripts' );

function scripts_and_styles() {

	wp_register_script( 'circle-progress', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.2.2/circle-progress.js' );
	 wp_enqueue_script('circle-progress');
	 wp_register_script( 'owl-carousel', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js' );
 	wp_enqueue_script( 'owl-carousel' );
	wp_register_script( 'jquery-mousewheel', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js' );
 wp_enqueue_script( 'jquery-mousewheel' );
	 wp_register_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js' );
		wp_enqueue_script('jquery');
	}

		add_action( 'wp_enqueue_scripts', 	'scripts_and_styles');
