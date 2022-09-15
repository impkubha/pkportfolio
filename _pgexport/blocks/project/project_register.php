<?php

        PG_Blocks::register_block_type( array(
            'name' => 'pkportfolio/project',
            'title' => __( 'My Project', 'pkportfolio' ),
            'icon' => 'media-code',
            'category' => 'MyHomepage',
            'render_template' => 'blocks/project/project.php',
            'supports' => array('color' => array('background' => false,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => false,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/project/project.js',
            'attributes' => array(

            ),
            'example' => array(

            ),
            'dynamic' => true
        ) );
