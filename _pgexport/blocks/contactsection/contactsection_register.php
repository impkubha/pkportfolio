<?php

        PG_Blocks::register_block_type( array(
            'name' => 'pkportfolio/contactsection',
            'title' => __( 'Contact', 'pkportfolio' ),
            'icon' => 'phone',
            'category' => 'MyHomepage',
            'supports' => array('color' => array('background' => false,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => false,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/contactsection/contactsection.js',
            'attributes' => array(

            ),
            'example' => array(

            ),
            'dynamic' => false
        ) );
