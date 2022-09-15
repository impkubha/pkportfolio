
( function ( blocks, element, blockEditor ) {
    const el = element.createElement,
        registerBlockType = blocks.registerBlockType,
        ServerSideRender = PgServerSideRender,
        InspectorControls = blockEditor.InspectorControls,
        useBlockProps = blockEditor.useBlockProps;
        
    const {__} = wp.i18n;
    const {ColorPicker, TextControl, ToggleControl, SelectControl, Panel, PanelBody, Disabled, TextareaControl, BaseControl} = wp.components;
    const {useSelect} = wp.data;
    const {RawHTML, Fragment} = element;
   
    const {InnerBlocks, URLInputButton, RichText} = wp.blockEditor;
    const useInnerBlocksProps = blockEditor.useInnerBlocksProps || blockEditor.__experimentalUseInnerBlocksProps;
    
    const propOrDefault = function(val, prop, field) {
        if(block.attributes[prop] && (val === null || val === '')) {
            return field ? block.attributes[prop].default[field] : block.attributes[prop].default;
        }
        return val;
    }
    
    const block = registerBlockType( 'pkportfolio/techstack', {
        apiVersion: 2,
        title: 'Tech Stack',
        icon: 'admin-page',
        category: 'MyHomepage',
        keywords: [],
        supports: {color: {background: false,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: false,align: false,},
        attributes: {
            techstackdetail: {
                type: 'text',
                default: `With having experience on different aspects of web development, I&apos;ve also been working with different no-code/low-code tools. As a UI Developer my skills shines well on these platforms. Below are some of my preferred and most used platforms.`,
            },
            image1: {
                type: 'object',
                default: {id: 0, url: (pg_project_data_pkportfolio ? pg_project_data_pkportfolio.url : '') + 'pg_logo_new-white.png', size: ''},
            },
            image2: {
                type: 'object',
                default: {id: 0, url: (pg_project_data_pkportfolio ? pg_project_data_pkportfolio.url : '') + 'pg_logo_new-white.png', size: ''},
            },
            image3: {
                type: 'object',
                default: {id: 0, url: (pg_project_data_pkportfolio ? pg_project_data_pkportfolio.url : '') + 'pg_logo_new-white.png', size: ''},
            }
        },
        example: { attributes: { techstackdetail: `With having experience on different aspects of web development, I&apos;ve also been working with different no-code/low-code tools. As a UI Developer my skills shines well on these platforms. Below are some of my preferred and most used platforms.`, image1: {id: 0, url: (pg_project_data_pkportfolio ? pg_project_data_pkportfolio.url : '') + 'pg_logo_new-white.png', size: ''}, image2: {id: 0, url: (pg_project_data_pkportfolio ? pg_project_data_pkportfolio.url : '') + 'pg_logo_new-white.png', size: ''}, image3: {id: 0, url: (pg_project_data_pkportfolio ? pg_project_data_pkportfolio.url : '') + 'pg_logo_new-white.png', size: ''} } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'pt-5' });
            const setAttributes = props.setAttributes; 
            
            props.image1 = useSelect(function( select ) {
                return {
                    image1: props.attributes.image1.id ? select('core').getMedia(props.attributes.image1.id) : undefined
                };
            }, [props.attributes.image1] ).image1;

            props.image2 = useSelect(function( select ) {
                return {
                    image2: props.attributes.image2.id ? select('core').getMedia(props.attributes.image2.id) : undefined
                };
            }, [props.attributes.image2] ).image2;

            props.image3 = useSelect(function( select ) {
                return {
                    image3: props.attributes.image3.id ? select('core').getMedia(props.attributes.image3.id) : undefined
                };
            }, [props.attributes.image3] ).image3;
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [el('div', {}, [el('div', { className: 'mb-3 ms-5 ps-5' }, el('div', { className: 'align-content-center align-items-center row' }, [el('div', { className: 'col-4' }, el('hr', {})), el('div', { className: 'col-auto text-center' }, el('img', { src: (pg_project_data_pkportfolio ? pg_project_data_pkportfolio.url : '') + 'icons8-design-30.png', className: '' })), el('div', { className: 'col-4' }, el('hr', {}))])), el('div', { className: 'pt-4 text-center' }, el('div', {}, [el('h3', { className: '' }, 'Tech Stack'), el(RichText, { tagName: 'p', value: propOrDefault( props.attributes.techstackdetail, 'techstackdetail' ), onChange: function(val) { setAttributes( {techstackdetail: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] })])), el('div', {}, el('div', { className: 'row' }, [el('div', { className: 'col-md-4' }, [props.attributes.image1 && props.attributes.image1.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image1.svg, 'image1', 'svg' ), {})), props.attributes.image1 && !props.attributes.image1.svg && propOrDefault( props.attributes.image1.url, 'image1', 'url' ) && el('img', { src: propOrDefault( props.attributes.image1.url, 'image1', 'url' ), width: '150' })]), el('div', { className: 'col-md-4' }, [props.attributes.image2 && props.attributes.image2.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image2.svg, 'image2', 'svg' ), {})), props.attributes.image2 && !props.attributes.image2.svg && propOrDefault( props.attributes.image2.url, 'image2', 'url' ) && el('img', { src: propOrDefault( props.attributes.image2.url, 'image2', 'url' ), width: '150' })]), el('div', { className: 'col-md-4' }, [props.attributes.image3 && props.attributes.image3.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image3.svg, 'image3', 'svg' ), {})), props.attributes.image3 && !props.attributes.image3.svg && propOrDefault( props.attributes.image3.url, 'image3', 'url' ) && el('img', { src: propOrDefault( props.attributes.image3.url, 'image3', 'url' ), width: '150' })])]))]), el('div', { className: 'mb-3 ms-5 mt-5 ps-5' }, el('div', { className: 'align-content-center align-items-center row' }, [el('div', { className: 'col-4' }, el('hr', {})), el('div', { className: 'col-auto text-center' }, el('img', { src: (pg_project_data_pkportfolio ? pg_project_data_pkportfolio.url : '') + 'icons8-design-30.png', className: '' })), el('div', { className: 'col-4' }, el('hr', {}))]))]),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgMediaImageControl('image1', setAttributes, props, 'medium', true, 'image1', '' ),
                                        
                        pgMediaImageControl('image2', setAttributes, props, 'full', true, 'image2', '' ),
                                        
                        pgMediaImageControl('image3', setAttributes, props, 'full', true, 'image3', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.techstackdetail,
                                        help: __( '' ),
                                        label: __( 'techstackdetail' ),
                                        onChange: function(val) { setAttributes({techstackdetail: val}) },
                                        type: 'text'
                                    }),    
                                ])
                            )
                        ]
                    )                            

            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({ className: 'pt-5' });
            return el('section', { ...blockProps }, [el('div', {}, [el('div', { className: 'mb-3 ms-5 ps-5' }, el('div', { className: 'align-content-center align-items-center row' }, [el('div', { className: 'col-4' }, el('hr', {})), el('div', { className: 'col-auto text-center' }, el('img', { src: (pg_project_data_pkportfolio ? pg_project_data_pkportfolio.url : '') + 'icons8-design-30.png', className: '' })), el('div', { className: 'col-4' }, el('hr', {}))])), el('div', { className: 'pt-4 text-center' }, el('div', {}, [el('h3', { className: '' }, 'Tech Stack'), el(RichText.Content, { tagName: 'p', value: propOrDefault( props.attributes.techstackdetail, 'techstackdetail' ) })])), el('div', {}, el('div', { className: 'row' }, [el('div', { className: 'col-md-4' }, [props.attributes.image1 && props.attributes.image1.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image1.svg, 'image1', 'svg' ), {})), props.attributes.image1 && !props.attributes.image1.svg && propOrDefault( props.attributes.image1.url, 'image1', 'url' ) && el('img', { src: propOrDefault( props.attributes.image1.url, 'image1', 'url' ), width: '150' })]), el('div', { className: 'col-md-4' }, [props.attributes.image2 && props.attributes.image2.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image2.svg, 'image2', 'svg' ), {})), props.attributes.image2 && !props.attributes.image2.svg && propOrDefault( props.attributes.image2.url, 'image2', 'url' ) && el('img', { src: propOrDefault( props.attributes.image2.url, 'image2', 'url' ), width: '150' })]), el('div', { className: 'col-md-4' }, [props.attributes.image3 && props.attributes.image3.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image3.svg, 'image3', 'svg' ), {})), props.attributes.image3 && !props.attributes.image3.svg && propOrDefault( props.attributes.image3.url, 'image3', 'url' ) && el('img', { src: propOrDefault( props.attributes.image3.url, 'image3', 'url' ), width: '150' })])]))]), el('div', { className: 'mb-3 ms-5 mt-5 ps-5' }, el('div', { className: 'align-content-center align-items-center row' }, [el('div', { className: 'col-4' }, el('hr', {})), el('div', { className: 'col-auto text-center' }, el('img', { src: (pg_project_data_pkportfolio ? pg_project_data_pkportfolio.url : '') + 'icons8-design-30.png', className: '' })), el('div', { className: 'col-4' }, el('hr', {}))]))]);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
