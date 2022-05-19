import { customComponents } from "./customComponents.js";
import pl from './locale/pl.js';

const crc = "create-comp";
const mvc = "move-comp";
const swv = "sw-visibility";
const expt = "export-template";
const osm = "open-sm";
const otm = "open-tm";
const ola = "open-layers";
const obl = "open-blocks";

const editor = grapesjs.init({
  container: "#gjs",
  fromElement: true,
  height: "100vh",
  width: "auto",
  storageManager: false,
  i18n: {
    locale: pl,
    localeFallback: 'en',
    messages: { pl },
  },
  assetManager: {
    embedAsBase64: true,
    uploadFile: false,
  },
  selectorManager: { componentFirst: true },
  plugins: ["gjs-blocks-basic", "grapesjs-plugin-forms", customComponents],
  panels: {
    defaults: [
      {
        id: "panel-devices",
        el: ".panel__devices",
        buttons: [
          {
            id: "device-desktop",
            className: "fa fa-desktop",
            command: "set-device-desktop",
            active: true,
            togglable: false,
          },
          {
            id: "device-tablet",
            className: "fa fa-tablet",
            command: "set-device-tablet",
            togglable: false,
          },
          {
            id: "device-mobile",
            className: "fa fa-mobile",
            command: "set-device-mobile",
            togglable: false,
          }
        ],
      },
      {
        id: "options",
        el: ".panel__actions",
        buttons: [
          {
            active: true,
            id: swv,
            label: 'Siatka',
            className: "icon-grid",
            command: swv,
            context: swv,
            attributes: { title: "View components" },
          },
          // {
          //   id: expt,
          //   className: "btn btn-secondary",
          //   label: 'Zapisz zmiany',
          //   command: expt,
          //   context: expt,
          //   attributes: { title: "Save" },
          // },
        ],
      }
    ],
  },
  deviceManager: {
    devices: [
      {
        name: "Desktop",
        width: "", // default size
      },
      {
        name: "Tablet",
        width: "979px", // this value will be used on canvas width
        widthMedia: "979px", // this value will be used in CSS @media
      },
      {
        name: "Mobile",
        width: "460px", // this value will be used on canvas width
        widthMedia: "460px", // this value will be used in CSS @media
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
          "align-items",
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
  traitManager: {
    appendTo: "#trait-container",
  },
  selectorManager: {
    appendTo: "#selector-container",
  }
});

const blockManager = editor.BlockManager;
const undoManager = editor.UndoManager;

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
    type: "div-block",
  },
  droppable: true,
});

blockManager.add("image", {
  label: "Grafika",
  category: "Test",
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
    type: "popup-wrapper",
  },
  droppable: true,
});

blockManager.add("form-1", {
  id: "form-1",
  category: "Formularze",
  label: "Zapis do newslettera z imieniem i nazwiskiem",
  content: {
    type: "form-1",
  },
  droppable: true,
});

editor.Panels.addButton('options', {
  id: 'undo',
  className: 'fa fa-undo',
  command: 'core:undo',
  attributes: { title: 'Undo' }
});

editor.onReady(() => {
  blockManager.getCategories().each((ctg) => ctg.set("open", false));
  undoManager.start();

  // setTimeout(function(){
  //   const textInputs = document.querySelectorAll('#sidebar input[type="text"]');
  //   const selects = document.querySelectorAll('#sidebar select');

  //   for (const textInput of textInputs){
  //     textInput.classList.add('input', 'input-bordered', 'input-sm');
  //   }

  //   for (const select of selects){
  //     select.classList.add('select', 'select-sm');
  //   }
  // }, 1000);
});