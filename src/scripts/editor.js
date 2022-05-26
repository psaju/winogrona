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

export const editor = grapesjs.init({
  container: "#gjs",
  fromElement: true,
  height: "100vh",
  width: "auto",
  storageManager: false,
  allowScripts: 1,
  i18n: {
    locale: pl,
    localeFallback: 'en',
    messages: { pl },
  },
  assetManager: {
    embedAsBase64: true,
    uploadFile: false,
  },
  canvasCss: ` 
  .gjs-selected {
      outline: 2px solid #14b8a6 !important;
   }
   .gjs-hovered {
      outline: 1px solid #14b8a6 !important;
    }
`,
  selectorManager: { componentFirst: true },
  plugins: [customComponents],
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
        id: "panel-grid",
        el: ".panel__grid",
        buttons: [
          {
            active: true,
            id: swv,
            label: 'Siatka',
            className: "icon grid",
            command: swv,
            context: swv,
            attributes: { title: "View components" },
          },
        ],
      },
      {
        id: "panel-undo",
        el: ".panel__undo",
        buttons: [
          {
            id: 'undo',
            className: 'undo icon',
            command: 'core:undo',
            label: 'Cofnij',
            attributes: { title: 'Undo' }
          }
        ]
      },
      {
        id: "panel-save",
        el: ".panel__save",
        buttons: [
          {
            id: expt,
            className: "btn btn-secondary w-full",
            label: 'Zapisz zmiany',
            command: expt,
            context: expt,
            attributes: { title: "Save" },
          },
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
          "align-items",
          "justify-content",
          "order",
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
    appendTo: "#blockmanager",
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

window.editor = editor;
const blockManager = editor.BlockManager;
const undoManager = editor.UndoManager;

editor.onReady(() => {
  blockManager.getCategories().each((ctg) => ctg.set("open", false));
  undoManager.start();

  document.querySelectorAll('.gjs-block-category').forEach((c, index) => {
    c.setAttribute('tabindex', '0');
    c.classList.add('collapse', 'collapse-arrow', 'group');
    // c.insertAdjacentHTML('afterbegin', '<input type="checkbox" class="peer"/>');
    c.querySelector('.gjs-title').classList.add('collapse-title');
    c.querySelector('.gjs-title').classList.remove('gjs-title');
    c.querySelector('.gjs-blocks-c').removeAttribute('style');
    c.querySelector('.gjs-blocks-c').classList.add('collapse-content');
    c.querySelector('.gjs-blocks-c').classList.remove('gjs-blocks-c');
    c.querySelector('i').remove();
  })

});