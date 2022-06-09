export const closeButtonComponents = (editor) => {

    editor.DomComponents.addType("close-button", {
      isComponent: (el) => el.tagName === "close-button",
      // Model definition
      model: {
        // Default properties
        defaults: {
          tagName: "span",
          draggable: '.popup-wrapper-sub',
          droppable: false,
          stylable: true,
          components: '<span></span>',
          attributes: {
            name: 'popup-close',
            type: 'close'
          },
          style: {
            'box-sizing': 'border-box',
            'position': 'absolute',
            'inset': '10px 10px auto auto',
            'background': '#d1d1d1',
            'width': '30px',
            'height': '30px',
            'border-radius': '100%',
            'font-size': '2rem',
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'cursor': 'pointer'
            
          },
          styles: `
              [name="popup-close"]:before{
                content: '\\d7'
              } `,
          traits: [{
            name: 'replacable',
            type: 'checkbox',
            label: 'replacable',
          }]
        },
      },
    });

    editor.DomComponents.addType("close-button-2", {
        extend: 'close-button',
        model: {
            defaults: {
                style: {
                    'box-sizing': 'border-box',
                    'position': 'absolute',
                    'inset': '10px 10px auto auto',
                    'background': '#f00',
                    'color': '#fff',
                    'width': '30px',
                    'height': '30px',
                    'border-radius': '100%',
                    'font-size': '2rem',
                    'display': 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                    'cursor': 'pointer'
                }
            }
        }
      });
};