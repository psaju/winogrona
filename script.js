const crc = "create-comp";
const mvc = "move-comp";
const swv = "sw-visibility";
const expt = "export-template";
const osm = "open-sm";
const otm = "open-tm";
const ola = "open-layers";
const obl = "open-blocks";
const ful = "fullscreen";
const prv = "preview";

const myNewComponentTypes = editor => {
  editor.DomComponents.addType('popup-wrapper', {
    isComponent: el => el.tagName === 'popup-wrapper',
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'popup-wrapper',
        draggable: true, 
        droppable: true, 
        stylable: true,
        attributes: { 
          class: 'popup'
        },
        components: `
          <div></div>
        `,
        style: {
          'max-width': '757px',
          'width': 'calc(100% - 20px)',
          'position': 'absolute',
          'left': '50%',
          'top': '50%',
          'transform': 'translate(-50%, -50%)',
          'min-height': '50px',
          'padding': '2rem'
        },
        styles: `
            .popup img {
              max-height: 100%;
              max-width: 100%;
            }
            @media (max-width:420px){
              .popup {
                max-width: 420px;
                flex-direction: columns;
              }
            }
          `,
      }
    }
  });

  editor.DomComponents.addType('div-block', {
    isComponent: el => el.tagName === 'div-block',
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'div-block',
        draggable: true, 
        droppable: true, 
        stylable: true,
        components: `
          <div></div>
        `,
        style: {
          'min-height': '50px',
          'display': 'block',
          'padding': '1rem'
        },
      }
    }
  });
}

const editor = grapesjs.init({
  container: "#gjs",
  fromElement: true,
  height: "100vh",
  width: "auto",
  storageManager: false,
  plugins: ["gjs-blocks-basic", myNewComponentTypes],
  panels: {
    defaults: [
      {
        id: "panel-devices",
        el: ".panel__devices",
        buttons: [
          {
            id: "device-desktop",
            label: "XL",
            command: "set-device-desktop",
            active: true,
            togglable: false,
          },
          {
            id: "device-laptop",
            label: "L",
            command: "set-device-laptop",
            togglable: false,
          },
          {
            id: "device-tablet",
            label: "M",
            command: "set-device-tablet",
            togglable: false,
          },
          {
            id: "device-mobile",
            label: "S",
            command: "set-device-mobile",
            togglable: false,
          },
          {
            id: "device-mobile-s",
            label: "XS",
            command: "set-device-mobile-s",
            togglable: false,
          },
        ],
      },
      {
        id: "options",
        el: ".swv",
        buttons: [
          {
            active: true,
            id: swv,
            className: "fa fa-square-o",
            command: swv,
            context: swv,
            attributes: { title: "View components" },
          },
          {
            id: prv,
            className: "fa fa-eye",
            command: prv,
            context: prv,
            attributes: { title: "Preview" },
          },
          {
            id: ful,
            className: "fa fa-arrows-alt",
            command: ful,
            context: ful,
            attributes: { title: "Fullscreen" },
          },
          {
            id: expt,
            className: "fa fa-save",
            command: expt,
            context: expt,
            attributes: { title: "Save" },
          }
        ],
      },
    ],
  },
  deviceManager: {
    devices: [
      {
        name: "Desktop",
        width: "", // default size
      },
      {
        name: "Laptop",
        width: "1200px", // this value will be used on canvas width
        widthMedia: "1200px", // this value will be used in CSS @media
      },
      {
        name: "Tablet",
        width: "979px", // this value will be used on canvas width
        widthMedia: "979px", // this value will be used in CSS @media
      },
      {
        name: "Mobile",
        width: "757px", // this value will be used on canvas width
        widthMedia: "757px", // this value will be used in CSS @media
      },
      {
        name: "Mobile-S",
        width: "480px", // this value will be used on canvas width
        widthMedia: "480px", // this value will be used in CSS @media
      },
    ],
  },
  styleManager: {
    appendTo: "#style-manager",
    sectors: [
      {
        name: "Ogólne",
        open: false,
        buildProps: [
          "float",
          "display",
          "position",
          "top",
          "right",
          "left",
          "bottom",
        ],
      },
      {
        name: "Wymiary",
        open: false,
        buildProps: [
          "width",
          "height",
          "max-width",
          "min-height",
          "margin",
          "padding",
        ],
      },
      {
        name: "Typografia",
        open: false,
        buildProps: [
          "font-family",
          "font-size",
          "font-weight",
          "letter-spacing",
          "color",
          "line-height",
          "text-align",
          "text-shadow",
        ],
      },
      {
        name: "Dekoracje",
        open: false,
        buildProps: [
          "border-radius-c",
          "background-color",
          "border-radius",
          "border",
          "box-shadow",
          "background",
        ],
      },
      {
        name: "Dodatkowe",
        open: false,
        buildProps: ["opacity", "transition", "perspective", "transform"],
        properties: [
          {
            type: "slider",
            property: "opacity",
            defaults: 1,
            step: 0.01,
            max: 1,
            min: 0,
          },
        ],
      },
    ],
  },
  blockManager: {
    appendTo: "#blocks",
    custom: true,
    blocks: [],
  },
});

// Commands
editor.Commands.add("set-device-desktop", {
  run(editor) {
    editor.setDevice("Desktop");
  },
  stop() {},
});

editor.Commands.add("set-device-laptop", {
  run(editor) {
    editor.setDevice("Laptop");
  },
  stop() {},
});

editor.Commands.add("set-device-tablet", {
  run(editor) {
    editor.setDevice("Tablet");
  },
  stop() {},
});
editor.Commands.add("set-device-mobile", {
  run(editor) {
    editor.setDevice("Mobile");
  },
  stop() {},
});

editor.Commands.add("set-device-mobile-s", {
  run(editor) {
    editor.setDevice("Mobile-S");
  },
  stop() {},
});

const blockManager = editor.BlockManager;

blockManager.add("big_label", {
  label: "Heading",
  content: '<h2 class="big_label">Heading</h2>',
  category: "Test",
  attributes: {
    title: "Dodaj nagłówek h2",
  },
});

blockManager.add("paragraph", {
  label: "Paragraf",
  category: "Test",
  content: `<p>Lorem ipsum</p>`,
});

blockManager.add("block", {
  label: "Blok",
  category: "Test",
  content: {
    type: 'div-block'
  },
  droppable: true,
});

blockManager.add("image", {
  label: "Grafika",
  content: `<p>Lorem ipsum</p>`,
  select: true,
  content: { type: "image" },
  activate: true,
});

blockManager.add("popup-wrapper", {
  id: "popup-wrapper",
  category: "Układ",
  label: "Popup (wrapper)",
  content: {
    type: 'popup-wrapper'
  },
  droppable: true,
});

setTimeout(function(){
  blockManager.getCategories().each(ctg => ctg.set('open', false))
}, 500)

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
