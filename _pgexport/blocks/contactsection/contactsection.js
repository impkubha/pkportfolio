
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
    
    const block = registerBlockType( 'pkportfolio/contactsection', {
        apiVersion: 2,
        title: 'Contact',
        icon: 'phone',
        category: 'MyHomepage',
        keywords: [],
        supports: {color: {background: false,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: false,align: false,},
        attributes: {
        },
        example: { attributes: {  } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'pt-5', id: 'contact' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, el('div', { className: 'container' }, el('div', { className: 'row' }, [el('div', { className: 'col-md-4' }, el('img', { className: 'image-fit image-fit-left-top ms-n5', width: '300', src: (pg_project_data_pkportfolio ? pg_project_data_pkportfolio.url : '') + 'Untitled-1.png' })), el('div', { className: 'col-md-8 mt-5 pt-5 text-center' }, [el('h3', {}, 'Interested? Let&apos;s Talk'), el('p', {}, 'I&apos;m open to discuss your project, let me know what you have in mind and we can discuss further.'), el('div', { className: ' text-center' }, [el('a', { href: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlDSqQRKLkvrtDSlmsfxFBzrzSkpfmVGPDFXXFrkwNjFZKdtFcFjCMnpSrSsCxcKmKHnxB' }, el('button', { className: 'bg-transparent btn btn-outline-light me-5 text-light', type: 'button' }, 'Get in Touch')), el('a', { href: 'https://www.facebook.com/impkubha' }, el('svg', { xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', width: '30', height: '30', viewBox: '0 0 172 172', className: 'me-2' }, el('g', { fill: 'none', fillRule: 'nonzero', stroke: 'none', strokeWidth: '1', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', strokeDasharray: '', strokeDashoffset: '0', fontFamily: 'none', fontWeight: 'none', fontSize: 'none', textAnchor: 'none', style: { mixBlendMode: 'normal' } }, [el('path', { d: 'M0,172v-172h172v172z', fill: 'none' }), el('g', { fill: '#ffffff' }, el('path', { d: 'M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,34.49173 25.41013,62.97493 58.5144,67.95147v-49.71947h-17.02227v-18.08293h17.02227v-12.03427c0,-19.92333 9.70653,-28.66667 26.2644,-28.66667c7.9292,0 12.126,0.59053 14.10973,0.85427v15.78387h-11.29467c-7.02907,0 -9.48293,6.66787 -9.48293,14.17853v9.88427h20.59987l-2.79213,18.08293h-17.80773v49.8628c33.58013,-4.55227 59.48907,-33.2648 59.48907,-68.0948c0,-37.9948 -30.8052,-68.8 -68.8,-68.8z' }))]))), el('a', { href: 'https://www.instagram.com/_pkbhardwaj/' }, el('svg', { xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', width: '30', height: '30', viewBox: '0 0 172 172', style: { fill: '#000000' }, className: 'me-2' }, el('g', { fill: 'none', fillRule: 'nonzero', stroke: 'none', strokeWidth: '1', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', strokeDasharray: '', strokeDashoffset: '0', fontFamily: 'none', fontWeight: 'none', fontSize: 'none', textAnchor: 'none', style: { mixBlendMode: 'normal' } }, [el('path', { d: 'M0,172v-172h172v172z', fill: 'none' }), el('g', { fill: '#ffffff' }, el('path', { d: 'M57.32214,17.2c-22.12493,0 -40.12214,18.01386 -40.12214,40.14453v57.33333c0,22.12493 18.01386,40.12214 40.14453,40.12214h57.33333c22.12493,0 40.12214,-18.01386 40.12214,-40.14453v-57.33333c0,-22.12493 -18.01386,-40.12214 -40.14453,-40.12214zM126.13333,40.13333c3.1648,0 5.73333,2.56853 5.73333,5.73333c0,3.1648 -2.56853,5.73333 -5.73333,5.73333c-3.1648,0 -5.73333,-2.56853 -5.73333,-5.73333c0,-3.1648 2.56853,-5.73333 5.73333,-5.73333zM86,51.6c18.9716,0 34.4,15.4284 34.4,34.4c0,18.9716 -15.4284,34.4 -34.4,34.4c-18.9716,0 -34.4,-15.4284 -34.4,-34.4c0,-18.9716 15.4284,-34.4 34.4,-34.4zM86,63.06667c-12.66573,0 -22.93333,10.2676 -22.93333,22.93333c0,12.66573 10.2676,22.93333 22.93333,22.93333c12.66573,0 22.93333,-10.2676 22.93333,-22.93333c0,-12.66573 -10.2676,-22.93333 -22.93333,-22.93333z' }))]))), el('a', { href: 'https://www.linkedin.com/in/pradeep-khadka-59624b15a/' }, el('svg', { xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', width: '30', height: '30', viewBox: '0 0 172 172', style: { fill: '#000000' } }, el('g', { fill: 'none', fillRule: 'nonzero', stroke: 'none', strokeWidth: '1', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', strokeDasharray: '', strokeDashoffset: '0', fontFamily: 'none', fontWeight: 'none', fontSize: 'none', textAnchor: 'none', style: { mixBlendMode: 'normal' } }, [el('path', { d: 'M0,172v-172h172v172z', fill: 'none' }), el('g', { fill: '#ffffff' }, el('path', { d: 'M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,37.9948 30.8052,68.8 68.8,68.8c37.9948,0 68.8,-30.8052 68.8,-68.8c0,-37.9948 -30.8052,-68.8 -68.8,-68.8zM60.17707,48.1772c4.82747,0 8.04387,3.2164 8.04387,7.50493c0,4.28853 -3.2164,7.50493 -8.57707,7.50493c-4.82747,0.00573 -8.04387,-3.2164 -8.04387,-7.50493c0,-4.28853 3.2164,-7.50493 8.57707,-7.50493zM68.8,114.66667h-17.2v-45.86667h17.2zM126.13333,114.66667h-16.19093v-25.06613c0,-6.9316 -4.3172,-8.5312 -5.934,-8.5312c-1.6168,0 -7.0176,1.0664 -7.0176,8.5312c0,1.0664 0,25.06613 0,25.06613h-16.72413v-45.86667h16.72987v6.3984c2.15573,-3.7324 6.47293,-6.3984 14.5684,-6.3984c8.09547,0 14.5684,6.3984 14.5684,20.80053z' }))])))])])]))),                        
                
            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({ className: 'pt-5', id: 'contact' });
            return el('section', { ...blockProps }, el('div', { className: 'container' }, el('div', { className: 'row' }, [el('div', { className: 'col-md-4' }, el('img', { className: 'image-fit image-fit-left-top ms-n5', width: '300', src: (pg_project_data_pkportfolio ? pg_project_data_pkportfolio.url : '') + 'Untitled-1.png' })), el('div', { className: 'col-md-8 mt-5 pt-5 text-center' }, [el('h3', {}, 'Interested? Let&apos;s Talk'), el('p', {}, 'I&apos;m open to discuss your project, let me know what you have in mind and we can discuss further.'), el('div', { className: ' text-center' }, [el('a', { href: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlDSqQRKLkvrtDSlmsfxFBzrzSkpfmVGPDFXXFrkwNjFZKdtFcFjCMnpSrSsCxcKmKHnxB' }, el('button', { className: 'bg-transparent btn btn-outline-light me-5 text-light', type: 'button' }, 'Get in Touch')), el('a', { href: 'https://www.facebook.com/impkubha' }, el('svg', { xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', width: '30', height: '30', viewBox: '0 0 172 172', className: 'me-2' }, el('g', { fill: 'none', fillRule: 'nonzero', stroke: 'none', strokeWidth: '1', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', strokeDasharray: '', strokeDashoffset: '0', fontFamily: 'none', fontWeight: 'none', fontSize: 'none', textAnchor: 'none', style: { mixBlendMode: 'normal' } }, [el('path', { d: 'M0,172v-172h172v172z', fill: 'none' }), el('g', { fill: '#ffffff' }, el('path', { d: 'M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,34.49173 25.41013,62.97493 58.5144,67.95147v-49.71947h-17.02227v-18.08293h17.02227v-12.03427c0,-19.92333 9.70653,-28.66667 26.2644,-28.66667c7.9292,0 12.126,0.59053 14.10973,0.85427v15.78387h-11.29467c-7.02907,0 -9.48293,6.66787 -9.48293,14.17853v9.88427h20.59987l-2.79213,18.08293h-17.80773v49.8628c33.58013,-4.55227 59.48907,-33.2648 59.48907,-68.0948c0,-37.9948 -30.8052,-68.8 -68.8,-68.8z' }))]))), el('a', { href: 'https://www.instagram.com/_pkbhardwaj/' }, el('svg', { xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', width: '30', height: '30', viewBox: '0 0 172 172', style: { fill: '#000000' }, className: 'me-2' }, el('g', { fill: 'none', fillRule: 'nonzero', stroke: 'none', strokeWidth: '1', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', strokeDasharray: '', strokeDashoffset: '0', fontFamily: 'none', fontWeight: 'none', fontSize: 'none', textAnchor: 'none', style: { mixBlendMode: 'normal' } }, [el('path', { d: 'M0,172v-172h172v172z', fill: 'none' }), el('g', { fill: '#ffffff' }, el('path', { d: 'M57.32214,17.2c-22.12493,0 -40.12214,18.01386 -40.12214,40.14453v57.33333c0,22.12493 18.01386,40.12214 40.14453,40.12214h57.33333c22.12493,0 40.12214,-18.01386 40.12214,-40.14453v-57.33333c0,-22.12493 -18.01386,-40.12214 -40.14453,-40.12214zM126.13333,40.13333c3.1648,0 5.73333,2.56853 5.73333,5.73333c0,3.1648 -2.56853,5.73333 -5.73333,5.73333c-3.1648,0 -5.73333,-2.56853 -5.73333,-5.73333c0,-3.1648 2.56853,-5.73333 5.73333,-5.73333zM86,51.6c18.9716,0 34.4,15.4284 34.4,34.4c0,18.9716 -15.4284,34.4 -34.4,34.4c-18.9716,0 -34.4,-15.4284 -34.4,-34.4c0,-18.9716 15.4284,-34.4 34.4,-34.4zM86,63.06667c-12.66573,0 -22.93333,10.2676 -22.93333,22.93333c0,12.66573 10.2676,22.93333 22.93333,22.93333c12.66573,0 22.93333,-10.2676 22.93333,-22.93333c0,-12.66573 -10.2676,-22.93333 -22.93333,-22.93333z' }))]))), el('a', { href: 'https://www.linkedin.com/in/pradeep-khadka-59624b15a/' }, el('svg', { xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', width: '30', height: '30', viewBox: '0 0 172 172', style: { fill: '#000000' } }, el('g', { fill: 'none', fillRule: 'nonzero', stroke: 'none', strokeWidth: '1', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', strokeDasharray: '', strokeDashoffset: '0', fontFamily: 'none', fontWeight: 'none', fontSize: 'none', textAnchor: 'none', style: { mixBlendMode: 'normal' } }, [el('path', { d: 'M0,172v-172h172v172z', fill: 'none' }), el('g', { fill: '#ffffff' }, el('path', { d: 'M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,37.9948 30.8052,68.8 68.8,68.8c37.9948,0 68.8,-30.8052 68.8,-68.8c0,-37.9948 -30.8052,-68.8 -68.8,-68.8zM60.17707,48.1772c4.82747,0 8.04387,3.2164 8.04387,7.50493c0,4.28853 -3.2164,7.50493 -8.57707,7.50493c-4.82747,0.00573 -8.04387,-3.2164 -8.04387,-7.50493c0,-4.28853 3.2164,-7.50493 8.57707,-7.50493zM68.8,114.66667h-17.2v-45.86667h17.2zM126.13333,114.66667h-16.19093v-25.06613c0,-6.9316 -4.3172,-8.5312 -5.934,-8.5312c-1.6168,0 -7.0176,1.0664 -7.0176,8.5312c0,1.0664 0,25.06613 0,25.06613h-16.72413v-45.86667h16.72987v6.3984c2.15573,-3.7324 6.47293,-6.3984 14.5684,-6.3984c8.09547,0 14.5684,6.3984 14.5684,20.80053z' }))])))])])])));
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
