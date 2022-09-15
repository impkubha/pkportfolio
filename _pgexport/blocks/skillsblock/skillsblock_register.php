<?php

        PG_Blocks::register_block_type( array(
            'name' => 'pkportfolio/skillsblock',
            'title' => __( 'Skills', 'pkportfolio' ),
            'icon' => 'admin-tools',
            'category' => 'MyHomepage',
            'supports' => array('color' => array('background' => false,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => false,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/skillsblock/skillsblock.js',
            'attributes' => array(

            ),
            'example' => array(

            ),
            'dynamic' => false
        ) );
