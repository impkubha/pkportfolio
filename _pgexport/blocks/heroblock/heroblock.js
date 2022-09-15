
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
    
    const block = registerBlockType( 'pkportfolio/heroblock', {
        apiVersion: 2,
        title: 'Hero Block',
        icon: 'superhero',
        category: 'MyHomepage',
        keywords: [],
        supports: {color: {background: false,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: false,align: false,},
        attributes: {
            name: {
                type: 'text',
                default: `I&apos;m <span class="text-primary">Pradeep Khadka</span>`,
            },
            detail: {
                type: 'text',
                default: `I&apos;m currently pursuing Bachelor Degree in Information and Management. I&apos;m an Enthusiastic Introvert, traveller and Flutter Developer.`,
            }
        },
        example: { attributes: { name: `I&apos;m <span class="text-primary">Pradeep Khadka</span>`, detail: `I&apos;m currently pursuing Bachelor Degree in Information and Management. I&apos;m an Enthusiastic Introvert, traveller and Flutter Developer.` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'pt-5' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [el('header', { className: 'align-items-center d-flex ' }, el('a', { href: '#', className: 'align-items-center d-flex flex-row text-dark text-decoration-none' }, el('span', { className: 'd-inline-block h3 mb-0 pb-2 position-relative text-white top-5' }, 'Hi,&nbsp;'))), el(RichText, { tagName: 'h1', className: 'fw-bold', value: propOrDefault( props.attributes.name, 'name' ), onChange: function(val) { setAttributes( {name: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), el(RichText, { tagName: 'p', className: 'col-md-8 fs-5 opacity-75', value: propOrDefault( props.attributes.detail, 'detail' ), onChange: function(val) { setAttributes( {detail: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), el('a', { className: 'btn btn-primary btn-sm rounded rounded-1 text-white', href: '#contact' }, 'Contact me')]),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.name,
                                        help: __( '' ),
                                        label: __( 'name' ),
                                        onChange: function(val) { setAttributes({name: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.detail,
                                        help: __( '' ),
                                        label: __( 'detail' ),
                                        onChange: function(val) { setAttributes({detail: val}) },
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
            return el('section', { ...blockProps }, [el('header', { className: 'align-items-center d-flex ' }, el('a', { href: '#', className: 'align-items-center d-flex flex-row text-dark text-decoration-none' }, el('span', { className: 'd-inline-block h3 mb-0 pb-2 position-relative text-white top-5' }, 'Hi,&nbsp;'))), el(RichText.Content, { tagName: 'h1', className: 'fw-bold', value: propOrDefault( props.attributes.name, 'name' ) }), el(RichText.Content, { tagName: 'p', className: 'col-md-8 fs-5 opacity-75', value: propOrDefault( props.attributes.detail, 'detail' ) }), el('a', { className: 'btn btn-primary btn-sm rounded rounded-1 text-white', href: '#contact' }, 'Contact me')]);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
