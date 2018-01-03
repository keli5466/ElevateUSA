<?php

function theme_enqueue_scripts()
{
    //FIRST
    wp_enqueue_style('fonts', get_stylesheet_directory_uri() . '/fonts/stylesheet.css');
    wp_enqueue_style('divi-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('elevate-style', get_stylesheet_directory_uri() . '/style.css', array( 'divi-style' ));

    // wp_enqueue_style('owl-caro', get_stylesheet_directory_uri() . 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css');
}
add_action('wp_enqueue_scripts', 'theme_enqueue_scripts');

function scripts_and_styles()
{
    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js');
    wp_enqueue_script('jquery');
    wp_register_script('owl-carousel', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js');
    wp_enqueue_script('owl-carousel');
    wp_register_script('e-custom', get_stylesheet_directory_uri() . '/e-custom.min.js');
    wp_enqueue_script('e-custom');

    // wp_register_script( 'font-awesome', 'https://use.fontawesome.com/14bf375dad.js' );
      // wp_enqueue_script( 'jquery-mousewheel' );
         // <script src="https://use.fontawesome.com/14bf375dad.js"></script>
}

        add_action('wp_enqueue_scripts', 'scripts_and_styles');
