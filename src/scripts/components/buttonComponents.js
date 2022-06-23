export const buttonComponents = (editor) => {
  editor.DomComponents.addType("button-29", {
    isComponent: (el) => el.tagName === "button-29",
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: "a",
        draggable: true,
        droppable: false,
        stylable: true,
        components: "Wyślij",
        attributes: {
          name: "btn",
          type: "button",
          class: "button-29",
        },
        styles: `
            .button-29 {
                align-items: center;
                appearance: none;
                background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
                border: 0;
                border-radius: 6px;
                box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
                box-sizing: border-box;
                color: #fff;
                cursor: pointer;
                display: inline-flex;
                font-family: "JetBrains Mono",monospace;
                height: 48px;
                justify-content: center;
                line-height: 1;
                list-style: none;
                overflow: hidden;
                padding-left: 16px;
                padding-right: 16px;
                position: relative;
                text-align: left;
                text-decoration: none;
                transition: box-shadow .15s,transform .15s;
                user-select: none;
                -webkit-user-select: none;
                touch-action: manipulation;
                white-space: nowrap;
                will-change: box-shadow,transform;
                font-size: 18px;
              }
              
              .button-29:focus {
                box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
              }
              
              .button-29:hover {
                box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
                transform: translateY(-2px);
              }
              
              .button-29:active {
                box-shadow: #3c4fe0 0 3px 7px inset;
                transform: translateY(2px);
              }`,
      },
      traits: [
        "link",
        {
          name: "replacable",
          type: "checkbox",
          label: "replacable",
        }
      ],
    },
  });

  editor.DomComponents.addType("button-30", {
    extend: "button",
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: "a",
        draggable: true,
        droppable: false,
        stylable: true,
        components: "Wyślij",
        attributes: {
          name: "btn",
          type: "button",
          class: "button-30",
        },
        styles: `
            .button-30 {
                align-items: center;
                appearance: none;
                background-color: #FCFCFD;
                border-radius: 4px;
                border-width: 0;
                box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
                box-sizing: border-box;
                color: #36395A;
                cursor: pointer;
                display: inline-flex;
                font-family: "JetBrains Mono",monospace;
                height: 48px;
                justify-content: center;
                line-height: 1;
                list-style: none;
                overflow: hidden;
                padding-left: 16px;
                padding-right: 16px;
                position: relative;
                text-align: left;
                text-decoration: none;
                transition: box-shadow .15s,transform .15s;
                user-select: none;
                -webkit-user-select: none;
                touch-action: manipulation;
                white-space: nowrap;
                will-change: box-shadow,transform;
                font-size: 18px;
              }
              
              .button-30:focus {
                box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
              }
              
              .button-30:hover {
                box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
                transform: translateY(-2px);
              }
              
              .button-30:active {
                box-shadow: #D6D6E7 0 3px 7px inset;
                transform: translateY(2px);
              }`,
        traits: [
          {
            name: "replacable",
            type: "checkbox",
            label: "replacable",
          },
        ],
      },
    },
  });

  editor.DomComponents.addType("button-21", {
    extend: "button",
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: "a",
        draggable: true,
        droppable: false,
        stylable: true,
        components: "Wyślij",
        attributes: {
          name: "btn",
          type: "button",
          class: "button-21",
        },
        styles: `
            .button-21 {
                align-items: center;
                appearance: none;
                background-color: #3EB2FD;
                background-image: linear-gradient(1deg, #4F58FD, #149BF3 99%);
                background-size: calc(100% + 20px) calc(100% + 20px);
                border-radius: 100px;
                border-width: 0;
                box-shadow: none;
                box-sizing: border-box;
                color: #FFFFFF;
                cursor: pointer;
                display: inline-flex;
                font-family: CircularStd,sans-serif;
                font-size: 1rem;
                height: auto;
                justify-content: center;
                line-height: 1.5;
                padding: 6px 20px;
                position: relative;
                text-align: center;
                text-decoration: none;
                transition: background-color .2s,background-position .2s;
                user-select: none;
                -webkit-user-select: none;
                touch-action: manipulation;
                vertical-align: top;
                white-space: nowrap;
              }
              
              .button-21:active,
              .button-21:focus {
                outline: none;
              }
              
              .button-21:hover {
                background-position: -20px -20px;
              }
              
              .button-21:focus:not(:active) {
                box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 .125em;
              }`,
        traits: [
          {
            name: "replacable",
            type: "checkbox",
            label: "replacable",
          },
        ],
      },
    },
  });

  editor.DomComponents.addType("button-1", {
    extend: "button",
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: "a",
        draggable: true,
        droppable: false,
        stylable: true,
        components: "Wyślij",
        attributes: {
          name: "btn",
          type: "button",
          class: "button-1",
        },
        styles: `
            .button-1 {
                background-color: #EA4C89;
                border-radius: 8px;
                border-style: none;
                box-sizing: border-box;
                color: #FFFFFF;
                cursor: pointer;
                display: inline-block;
                font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
                font-size: 14px;
                font-weight: 500;
                height: 40px;
                line-height: 20px;
                list-style: none;
                margin: 0;
                outline: none;
                padding: 10px 16px;
                position: relative;
                text-align: center;
                text-decoration: none;
                transition: color 100ms;
                vertical-align: baseline;
                user-select: none;
                -webkit-user-select: none;
                touch-action: manipulation;
              }
              
              .button-1:hover,
              .button-1:focus {
                background-color: #F082AC;
              }`,
        traits: [
          {
            name: "replacable",
            type: "checkbox",
            label: "replacable",
          },
        ],
      },
    },
  });
};
