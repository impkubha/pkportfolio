<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "pt-5", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div>
        <div>
            <h2><?php _e( 'Projects', 'pkportfolio' ); ?></h2>
            <hr class="bg-white mt-n1 w-25"></hr>
        </div>
        <?php
            $project_query_args = array(
                'post_type' => 'project',
                'nopaging' => true,
                'order' => 'ASC',
                'orderby' => 'date'
            )
        ?>
        <?php $project_query = new WP_Query( $project_query_args ); ?>
        <div class="pt-3">
            <?php if ( $project_query->have_posts() ) : ?>
                <div class="row">
                    <?php while ( $project_query->have_posts() ) : $project_query->the_post(); ?>
                        <?php PG_Helper::rememberShownPost(); ?>
                        <div data-pg-ia-scene='{"l":[{"t":"this","a":"slideInLeft"}]}' <?php post_class( 'col-md-5 text-center' ); ?> id="post-<?php the_ID(); ?>">
                            <h3><?php echo get_field( 'project_name' ); ?></h3>
                            <img src="<?php echo PG_Image::getUrl( get_post_meta( get_the_ID(), 'project_screenshot', true ), 'large' ) ?>" width="200"/> 
                            <p><?php echo get_post_meta( get_the_ID(), 'project_description', true ); ?></p> 
                        </div>
                    <?php endwhile; ?>
                    <?php wp_reset_postdata(); ?>
                </div>
            <?php else : ?>
                <p><?php _e( 'Sorry, no posts matched your criteria.', 'pkportfolio' ); ?></p>
            <?php endif; ?>
        </div>
    </div>
</section>