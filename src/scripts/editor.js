import { customComponents} from "./customComponents.js";
import {closeButtonComponents} from "./components/closeButtonComponents.js";
import {buttonComponents} from "./components/buttonComponents.js";
import {textVariablesComponent} from "./components/textVariablesComponent.js"
import { templates } from "./templates.js";

const swv = "sw-visibility";
const expt = "export-template";

export const editor = grapesjs.init({
  container: "#gjs",
  fromElement: true,
  height: "100vh",
  width: "auto",
  storageManager: false,
  allowScripts: 1,
  // i18n: {
  //   locale: pl,
  //   localeFallback: 'en',
  //   messages: { pl },
  // },
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
    .gjs-plh-image {
      outline: none;
    }
    body {
      background: white;
      background-image: radial-gradient(#dadada 1px, transparent 0);
      background-size: 20px 20px;
      background-position: -19px -19px;
    }
`,
  selectorManager: {
    componentFirst: true
  },
  plugins: [
    customComponents, 
    templates, 
    closeButtonComponents, 
    textVariablesComponent, 
    buttonComponents,
    'grapesjs-plugin-forms', 
    'grapesjs-custom-code', 
    // 'gjs-plugin-ckeditor'
  ],
  pluginsOpts: {
    'grapesjs-custom-code': {
      blockLabel: 'Własny kod',
      blockCustomCode: false,
      placeholderContent: '<span>Tu umieść własny kod</span>',
      toolbarBtnCustomCode: {
        attributes: {
          title: 'Edytuj własny kod'
        }
      },
      modalTitle: 'Umieść własny kod',
      buttonLabel: 'Zapisz'
    },
    // 'gjs-plugin-ckeditor': {
    //   position: 'center',
    //   options: {
    //     startupFocus: true,
    //     extraAllowedContent: '*(*);*{*}', 
    //     allowedContent: true, 
    //     enterMode: CKEDITOR.ENTER_BR,
    //     extraPlugins: 'sharedspace,justify,colorbutton,panelbutton,font',
    //     toolbar: [{
    //         name: 'styles',
    //         items: ['Font', 'FontSize']
    //       },
    //       ['Bold', 'Italic', 'Underline', 'Strike'],
    //       {
    //         name: 'paragraph',
    //         items: ['NumberedList', 'BulletedList']
    //       },
    //       {
    //         name: 'links',
    //         items: ['Link', 'Unlink']
    //       },
    //       {
    //         name: 'colors',
    //         items: ['TextColor', 'BGColor']
    //       },
    //     ],
    //   }
    // }
  },
  panels: {
    defaults: [{
        id: "panel-devices",
        el: ".panel__devices",
        buttons: [{
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
        buttons: [{
          active: true,
          id: swv,
          label: 'Siatka',
          className: "icon grid",
          command: swv,
          context: swv,
          attributes: {
            title: "View components"
          },
        }, ],
      },
      {
        id: "panel-undo",
        el: ".panel__undo",
        buttons: [{
          id: 'undo',
          className: 'undo icon',
          command: 'core:undo',
          label: 'Cofnij',
          attributes: {
            title: 'Undo'
          }
        }]
      },
      {
        id: "panel-save",
        el: ".panel__save",
        buttons: [{
          id: expt,
          className: "btn btn-secondary w-full",
          label: 'Zapisz zmiany',
          command: expt,
          context: expt,
          attributes: {
            title: "Save"
          },
        }, ],
      },
      {
        id: "panel-clear",
        el: ".panel__clear",
        buttons: [{
          id: swv,
          label: 'Wyczyść',
          className: "icon clear",
          command: 'core:canvas-clear',
        }, ],
      },
    ],
  },
  deviceManager: {
    devices: [{
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
          "overflow",
          "align-items",
          "justify-content",
          "flex-wrap",
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
          "min-width",
          "max-width",
          "min-height",
          "max-height",
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
        properties: [{
          type: "slider",
          property: "opacity",
          defaults: 1,
          step: 0.01,
          max: 1,
          min: 0,
        }, ],
      },
      {
        name: "Basic",
        open: true,
        buildProps: [
          "font-family",
          "font-size",
          "font-weight",
          "color",
          "background-color",
          "text-align",
          "border-width",
          "border-color",
          "border-style"
        ],
        properties: [
          {
            type: 'select',
            property: 'font-family',
            default: 'Arial, Helvetica, sans-serif',
            label: ' '
          },
          {
            type: 'select',
            property: 'font-size',
            default: '14px',
            label: ' ',
            options: [
              {id: '10px', label: '10px'},
              {id: '12px', label: '12px'},
              {id: '14px', label: '14px'},
              {id: '16px', label: '16px'},
              {id: '18px', label: '18px'},
              {id: '20px', label: '20px'},
              {id: '22px', label: '22px'},
              {id: '24px', label: '24px'},
              {id: '26px', label: '26px'},
              {id: '28px', label: '28px'},
              {id: '36px', label: '36px'},
              {id: '48px', label: '48px'},
              {id: '72px', label: '72px'},
            ]
          },
          {
            type: 'radio',
            property: 'text-align',
            default: 'left',
            options: [
              {
                id: 'left', 
                label: `<svg xmlns="http://www.w3.org/2000/svg" width="13.134" height="13.134" viewBox="0 0 13.134 13.134"><path d="M.376,11.631H8.067a.376.376,0,0,0,.376-.376V10.131a.376.376,0,0,0-.376-.376H.376A.376.376,0,0,0,0,10.131v1.124a.376.376,0,0,0,.376.376Zm0-7.5H8.067a.376.376,0,0,0,.376-.376V2.626a.376.376,0,0,0-.376-.376H.376A.376.376,0,0,0,0,2.626V3.75a.376.376,0,0,0,.376.376ZM12.665,6H.469A.469.469,0,0,0,0,6.472V7.41a.469.469,0,0,0,.469.469h12.2a.469.469,0,0,0,.469-.469V6.472A.469.469,0,0,0,12.665,6Zm0,7.5H.469A.469.469,0,0,0,0,13.977v.938a.469.469,0,0,0,.469.469h12.2a.469.469,0,0,0,.469-.469v-.938A.469.469,0,0,0,12.665,13.507Z" transform="translate(0 -2.25)"/></svg>`
              },
              {
                id: 'right', 
                label: '<svg xmlns="http://www.w3.org/2000/svg" width="13.134" height="13.134" viewBox="0 0 13.134 13.134"><path d="M.469,7.879h12.2a.469.469,0,0,0,.469-.469V6.472A.469.469,0,0,0,12.665,6H.469A.469.469,0,0,0,0,6.472V7.41a.469.469,0,0,0,.469.469Zm12.2,5.629H.469A.469.469,0,0,0,0,13.977v.938a.469.469,0,0,0,.469.469h12.2a.469.469,0,0,0,.469-.469v-.938A.469.469,0,0,0,12.665,13.507ZM12.758,2.25H5.067a.376.376,0,0,0-.376.376V3.75a.376.376,0,0,0,.376.376h7.691a.376.376,0,0,0,.376-.376V2.626a.376.376,0,0,0-.376-.376Zm0,7.5H5.067a.376.376,0,0,0-.376.376v1.124a.376.376,0,0,0,.376.376h7.691a.376.376,0,0,0,.376-.376V10.131a.376.376,0,0,0-.376-.376Z" transform="translate(0 -2.25)"/></svg>'
              },
              {
                id: 'justify', 
                label: '<svg xmlns="http://www.w3.org/2000/svg" width="13.134" height="13.134" viewBox="0 0 13.134 13.134"><path d="M12.665,13.507H.469A.469.469,0,0,0,0,13.977v.938a.469.469,0,0,0,.469.469h12.2a.469.469,0,0,0,.469-.469v-.938A.469.469,0,0,0,12.665,13.507Zm0-3.752H.469A.469.469,0,0,0,0,10.224v.938a.469.469,0,0,0,.469.469h12.2a.469.469,0,0,0,.469-.469v-.938A.469.469,0,0,0,12.665,9.755Zm0-3.752H.469A.469.469,0,0,0,0,6.472V7.41a.469.469,0,0,0,.469.469h12.2a.469.469,0,0,0,.469-.469V6.472A.469.469,0,0,0,12.665,6Zm0-3.752H.469A.469.469,0,0,0,0,2.719v.938a.469.469,0,0,0,.469.469h12.2a.469.469,0,0,0,.469-.469V2.719A.469.469,0,0,0,12.665,2.25Z" transform="translate(0 -2.25)"/></svg>'
              },
              {
                id: 'center', 
                label: '<svg xmlns="http://www.w3.org/2000/svg" width="13.134" height="13.134" viewBox="0 0 13.134 13.134"><path d="M12.665,6H.469A.469.469,0,0,0,0,6.472V7.41a.469.469,0,0,0,.469.469h12.2a.469.469,0,0,0,.469-.469V6.472A.469.469,0,0,0,12.665,6Zm0,7.5H.469A.469.469,0,0,0,0,13.977v.938a.469.469,0,0,0,.469.469h12.2a.469.469,0,0,0,.469-.469v-.938A.469.469,0,0,0,12.665,13.507Zm-9.5-9.381h6.8a.354.354,0,0,0,.354-.355V2.6a.354.354,0,0,0-.354-.354h-6.8a.354.354,0,0,0-.355.354V3.772A.355.355,0,0,0,3.169,4.126Zm6.8,7.5a.354.354,0,0,0,.354-.355V10.109a.354.354,0,0,0-.354-.354h-6.8a.354.354,0,0,0-.355.354v1.167a.355.355,0,0,0,.355.355Z" transform="translate(0 -2.25)"/></svg>'
              },
            ]
          },
          {
            type: 'color',
            property: 'background-color',
            default: '#000000',
            label: 'Kolor tła'
          },
          {
            type: 'color',
            property: 'color',
            default: '#000000',
            label: 'Kolor tekstu'
          },
          {
            property: 'font-weight',
            label: ' '
          },
          {
            property: 'text-align',
            label: ' '
          },
          {
            property: 'border-width',
            label: ' '
          },
          {
            property: 'border-style',
            label: ' ',
            default: 'none'
          },
          {
            property: 'border-color',
            label: 'Kolor ramki'
          }
        ]
      },
    ],
  },
  blockManager: {
    appendTo: "#blocks-temp",
    custom: true,
    blocks: [],
  },
  traitManager: {
    appendTo: "#trait-container",
  },
  selectorManager: {
    appendTo: "#selector-container",
  },
  modal: {
    backdrop: false,
    custom: true,
  }
});

window.editor = editor;