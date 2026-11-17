<?php
function my_theme_setup(){
    
    register_nav_menus(array(
        'header-menu' => 'ヘッダーメニュー',
    ));
}

add_action('after_setup_theme', 'my_theme_setup');

function my_theme_enqueue_assets(){
    wp_enqueue_style(
        'portfolio-style',
        get_stylesheet_uri(),
        array(),
        filemtime(get_template_directory() . '/style.css')
    );

    wp_enqueue_script(
    'portfolio-script',
    get_template_directory_uri() . '/js/script.js',
    array(),
    filemtime(get_template_directory() . '/js/script.js'),
    true
);

}

add_action('wp_enqueue_scripts', 'my_theme_enqueue_assets');