<?php

        PG_Blocks::register_block_type( array(
            'name' => 'pkportfolio/heroblock',
            'title' => __( 'Hero Block', 'pkportfolio' ),
            'icon' => 'superhero',
            'category' => 'MyHomepage',
            'supports' => array('color' => array('background' => false,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => false,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/heroblock/heroblock.js',
            'attributes' => array(
                'name' => array(
                    'type' => 'text',
                    'default' => 'I&apos;m <span class="text-primary">Pradeep Khadka</span>'
                ),
                'detail' => array(
                    'type' => 'text',
                    'default' => 'I&apos;m currently pursuing Bachelor Degree in Information and Management. I&apos;m an Enthusiastic Introvert, traveller and Flutter Developer.'
                )
            ),
            'example' => array(
'name' => 'I&apos;m <span class="text-primary">Pradeep Khadka</span>', 'detail' => 'I&apos;m currently pursuing Bachelor Degree in Information and Management. I&apos;m an Enthusiastic Introvert, traveller and Flutter Developer.'
            ),
            'dynamic' => false
        ) );
