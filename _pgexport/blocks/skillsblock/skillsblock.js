
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
    
    const block = registerBlockType( 'pkportfolio/skillsblock', {
        apiVersion: 2,
        title: 'Skills',
        icon: 'admin-tools',
        category: 'MyHomepage',
        keywords: [],
        supports: {color: {background: false,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: false,align: false,},
        attributes: {
        },
        example: { attributes: {  } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'pt-5' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, el('div', {}, [el('div', {}, [el('h2', {}, 'Skills'), el('hr', { className: 'bg-white mt-n1 w-25' })]), el('div', { className: 'pb-2 pt-2' }, [el('h5', {}, 'Flutter'), el('div', { className: 'bg-transparent progress w-50' }, el('div', { className: 'bg-gradient progress-bar rounded', role: 'progressbar', style: { width: '80%' }, 'aria-valuenow': '25', 'aria-valuemin': '0', 'aria-valuemax': '100', 'data-pg-ia': '{"l":[{"t":"this","a":"slideInLeft","trg":"load"}]}' }))]), el('div', { className: 'pb-2 pt-2' }, [el('h5', {}, 'GitHub'), el('div', { className: 'bg-transparent progress w-50' }, el('div', { className: 'progress-bar rounded', role: 'progressbar', style: { width: '65%' }, 'aria-valuenow': '25', 'aria-valuemin': '0', 'aria-valuemax': '100', 'data-pg-ia': '{"l":[{"t":"this","a":"slideInLeft","trg":"load"}]}' }))]), el('div', { className: 'pb-2 pt-2' }, [el('h5', {}, 'HTML/CSS/PHP'), el('div', { className: 'bg-transparent progress w-50' }, el('div', { className: 'progress-bar rounded', role: 'progressbar', style: { width: '70%' }, 'aria-valuenow': '25', 'aria-valuemin': '0', 'aria-valuemax': '100', 'data-pg-ia': '{"l":[{"t":"this","a":"slideInLeft","trg":"load"}]}' }))]), el('div', { className: 'pb-2 pt-2' }, [el('h5', {}, 'JAVA'), el('div', { className: 'bg-transparent col-lg-6 col-sm-3 progress w-50' }, el('div', { className: 'progress-bar rounded', role: 'progressbar', style: { width: '65%' }, 'aria-valuenow': '25', 'aria-valuemin': '0', 'aria-valuemax': '100', 'data-pg-ia': '{"l":[{"t":"this","a":"slideInLeft","trg":"load"}]}' }))])])),                        
                
            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({ className: 'pt-5' });
            return el('section', { ...blockProps }, el('div', {}, [el('div', {}, [el('h2', {}, 'Skills'), el('hr', { className: 'bg-white mt-n1 w-25' })]), el('div', { className: 'pb-2 pt-2' }, [el('h5', {}, 'Flutter'), el('div', { className: 'bg-transparent progress w-50' }, el('div', { className: 'bg-gradient progress-bar rounded', role: 'progressbar', style: { width: '80%' }, 'aria-valuenow': '25', 'aria-valuemin': '0', 'aria-valuemax': '100', 'data-pg-ia': '{"l":[{"t":"this","a":"slideInLeft","trg":"load"}]}' }))]), el('div', { className: 'pb-2 pt-2' }, [el('h5', {}, 'GitHub'), el('div', { className: 'bg-transparent progress w-50' }, el('div', { className: 'progress-bar rounded', role: 'progressbar', style: { width: '65%' }, 'aria-valuenow': '25', 'aria-valuemin': '0', 'aria-valuemax': '100', 'data-pg-ia': '{"l":[{"t":"this","a":"slideInLeft","trg":"load"}]}' }))]), el('div', { className: 'pb-2 pt-2' }, [el('h5', {}, 'HTML/CSS/PHP'), el('div', { className: 'bg-transparent progress w-50' }, el('div', { className: 'progress-bar rounded', role: 'progressbar', style: { width: '70%' }, 'aria-valuenow': '25', 'aria-valuemin': '0', 'aria-valuemax': '100', 'data-pg-ia': '{"l":[{"t":"this","a":"slideInLeft","trg":"load"}]}' }))]), el('div', { className: 'pb-2 pt-2' }, [el('h5', {}, 'JAVA'), el('div', { className: 'bg-transparent col-lg-6 col-sm-3 progress w-50' }, el('div', { className: 'progress-bar rounded', role: 'progressbar', style: { width: '65%' }, 'aria-valuenow': '25', 'aria-valuemin': '0', 'aria-valuemax': '100', 'data-pg-ia': '{"l":[{"t":"this","a":"slideInLeft","trg":"load"}]}' }))])]));
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
