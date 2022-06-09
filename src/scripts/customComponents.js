export const customComponents = (editor) => {
  editor.DomComponents.addType("popup-wrapper", {
    isComponent: (el) => el.tagName === "popup-wrapper",
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: "div",
        draggable: true,
        droppable: true,
        stylable: true,
        attributes: {
          class: "popup",
        },
        components: `
            <div></div>
          `,
        style: {
          "max-width": "757px",
          width: "calc(100% - 20px)",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          "min-height": "50px",
        },
      },
    },
  });

  editor.DomComponents.addType("popup-wrapper-sub", {
    isComponent: (el) => el.tagName === "popup-wrapper-sub",
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: "div",
        draggable: '.popup',
        droppable: true,
        stylable: true,
        attributes: {
          class: "popup-wrapper-sub"
        },
        components: `
            <div></div>
          `,
        style: {
          "display": "flex",
          "flex-wrap": "wrap",
          "width": "100%",
          "height": "100%",
          "min-height": "50px"
        },
      },
    },
  });

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
        },
        style: {
          'box-sizing': 'border-box',
          'position': 'absolute',
          'top': '3px',
          'right': '3px',
          'border-radius': '100%',
          'width': '20px',
          'height': '20px',
          'text-align': 'center',
          'background-color': '#d6d6d6',
        },
        styles: `
            [name="popup-close"]:before{
              content: '\\d7'
            }
          `,
        traits: [{
          name: 'replacable',
          type: 'checkbox',
          label: 'replacable',
        }]
      },
    },
  });

  editor.DomComponents.addType("div-block", {
    isComponent: (el) => el.tagName === "div-block",
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: "div",
        draggable: true,
        droppable: true,
        stylable: true,
        components: `
            <div></div>
          `,
        style: {
          "min-height": "50px",
          display: "block",
          padding: "1rem",
        },
      },
    },
  });

  editor.DomComponents.addType("form-1", {
    isComponent: (el) => el.tagName === "form-1",
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: "div",
        draggable: true,
        droppable: true,
        stylable: true,
        attributes: {
          class: "form",
        },
        components: `
            <form action="/settings.php" method="post">
              <div class="form-group">
                <div class="has-feedback">
                  <input class="newsletter_form_field form-control validate" name="mailing_email" id="mailing_email" type="text" data-validate="email">
                  <label for="mailing_email" class="control-label">Podaj Twój e-mail</label>
                  <span class="form-control-feedback"></span>
                </div>
              </div>
              <div class="form-group">
                <div class="has-feedback">
                  <input class="newsletter_form_field form-control validate" name="mailing_name" id="mailing_name" type="text" maxlength="50" minlength="3">
                  <label for="mailing_name" class="control-label">Podaj Twoje imię</label>
                  <span class="form-control-feedback"></span>
                </div>
              </div>
              <input id="mailing_action_contact" name="mailing_action" value="add" type="hidden">
              <button type="submit" id="newsletter_button_add" type="submit" class="btn --solid" value="Zapisz się">Zapisz się</button>
            </form>
          `,
        style: {
          "min-height": "50px",
          display: "flex",
          padding: "1rem",
        },
      },
    },
  });
};