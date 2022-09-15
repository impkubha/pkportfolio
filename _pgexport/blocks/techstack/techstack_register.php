<?php

        PG_Blocks::register_block_type( array(
            'name' => 'pkportfolio/techstack',
            'title' => __( 'Tech Stack', 'pkportfolio' ),
            'icon' => 'admin-page',
            'category' => 'MyHomepage',
            'supports' => array('color' => array('background' => false,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => false,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/techstack/techstack.js',
            'attributes' => array(
                'techstackdetail' => array(
                    'type' => 'text',
                    'default' => 'With having experience on different aspects of web development, I&apos;ve also been working with different no-code/low-code tools. As a UI Developer my skills shines well on these platforms. Below are some of my preferred and most used platforms.'
                ),
                'image1' => array(
                    'type' => 'object',
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/pg_logo_new-white.png' ), 'size' => '')
                ),
                'image2' => array(
                    'type' => 'object',
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/pg_logo_new-white.png' ), 'size' => '')
                ),
                'image3' => array(
                    'type' => 'object',
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/pg_logo_new-white.png' ), 'size' => '')
                )
            ),
            'example' => array(
'techstackdetail' => 'With having experience on different aspects of web development, I&apos;ve also been working with different no-code/low-code tools. As a UI Developer my skills shines well on these platforms. Below are some of my preferred and most used platforms.', 'image1' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/pg_logo_new-white.png' ), 'size' => ''), 'image2' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/pg_logo_new-white.png' ), 'size' => ''), 'image3' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/pg_logo_new-white.png' ), 'size' => '')
            ),
            'dynamic' => false
        ) );
