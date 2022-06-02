import { editor } from "./editor.js";

const blockManager = editor.BlockManager;
const categoryLabels = {
    basic: `<div class="c_heading">Basic</div><div class="c_desc">Bloki, grafiki etc.</div>`,
    layout: `<div class="c_heading">Układy</div><div class="c_desc">Dwu, trzykolumnowe etc.</div>`,
    forms: `<div class="c_heading">Formularze</div><div class="c_desc">inputy, przyciski etc</div>`,
    templates: '<div class="c_heading">Szablony</div><div class="c_desc">gotowe wzory</div>',
    extra: '<div class="c_heading">Extra</div><div class="c_desc">kod, zmienne</div>',
}

blockManager.add("big_label", {
    label: "Heading",
    content: '<h2>Heading</h2>',
    category: 'basic',
    attributes: {
      title: "Dodaj nagłówek h2",
    },
  });

  blockManager.add("link", {
    label: "Link",
    content: '<a>Link</a>',
    category: 'basic',
    attributes: {
      title: "Wstaw link",
    },
  });
  
  blockManager.add("paragraph", {
    label: "Paragraf",
    category: 'basic',
    content: `<p>Lorem ipsum</p>`,
  });
  
  blockManager.add("block", {
    label: "Blok",
    category: 'basic',
    content: {
      type: "div-block",
    },
    droppable: true,
  });
  
  blockManager.add("image", {
    label: "Grafika",
    category: "basic",
    content: { 
        type: "image" 
    },
    activate: true,
    droppable: true,
  });
  
  blockManager.add("popup-wrapper", {
    id: "popup-wrapper",
    category: "layout",
    label: "Pusty",
    content: {
      type: "popup-wrapper"
    },
    droppable: true,
    attributes: {
      name: 'popup'
    }
  });

  blockManager.add("popup-wrapper-sub", {
    id: "popup-wrapper-sub",
    category: "layout",
    label: "Sub",
    content: {
      type: "popup-wrapper-sub"
    },
    droppable: true,
  });

  blockManager.add("columns-2", {
    id: "columns-2",
    category: "layout",
    label: "2 Kolumny",
    content: `<div class="popup" id="ihye" style="box-sizing: border-box; max-width: 757px; width: calc(100% - 20px); position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); min-height: 50px; overflow: hidden;"><div style="box-sizing: border-box;"></div><div class="popup-wrapper-sub" id="ijha" style="box-sizing: border-box; display: flex; flex-wrap: wrap; width: 100%; height: 100%; min-height: 50px;"><div style="box-sizing: border-box;"></div><div id="i1mi" style="box-sizing: border-box; min-height: 50px; display: block; padding: 1rem; width: 50%;"><div style="box-sizing: border-box;"></div></div><div id="i3ad" style="box-sizing: border-box; min-height: 50px; display: block; padding: 1rem; width: 50%;"><div style="box-sizing: border-box;"></div></div></div></div>`,
    droppable: true,
    attributes: {
      name: 'popup'
    }
  });

  blockManager.add("rows-2", {
    id: "rows-2",
    category: "layout",
    label: "2 Rzędy",
    content: `<div class="popup" id="ihye" style="box-sizing: border-box; max-width: 757px; width: calc(100% - 20px); position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); min-height: 50px; overflow: hidden;"><div style="box-sizing: border-box;"></div><div class="popup-wrapper-sub" id="ijha" style="box-sizing: border-box; display: flex; flex-wrap: wrap; width: 100%; height: 100%; min-height: 50px;"><div style="box-sizing: border-box;"></div><div id="i1mi" style="box-sizing: border-box; min-height: 50px; display: block; padding: 1rem; width: 100%;"><div style="box-sizing: border-box;"></div></div><div id="i3ad" style="box-sizing: border-box; min-height: 50px; display: block; padding: 1rem; width: 100%;"><div style="box-sizing: border-box;"></div></div></div></div>`,
    droppable: true,
    attributes: {
      name: 'popup'
    }
  });

  blockManager.add("columns-2-1", {
    id: "columns-2-1",
    category: "layout",
    label: "2 Kolumny 2/1",
    content: `<div class="popup" id="ihye" style="box-sizing: border-box; max-width: 757px; width: calc(100% - 20px); position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); min-height: 50px; overflow: hidden;"><div style="box-sizing: border-box;"></div><div class="popup-wrapper-sub" id="ijha" style="box-sizing: border-box; display: flex; flex-wrap: wrap; width: 100%; height: 100%; min-height: 50px;"><div style="box-sizing: border-box;"></div><div id="i1mi" style="box-sizing: border-box; min-height: 50px; display: block; padding: 1rem; width: 66%;"><div style="box-sizing: border-box;"></div></div><div id="i3ad" style="box-sizing: border-box; min-height: 50px; display: block; padding: 1rem; width: 34%;"><div style="box-sizing: border-box;"></div></div></div></div>`,
    droppable: true,
    attributes: {
      name: 'popup'
    }
  });
  
  blockManager.add("close-button", {
    id: "close-button-1",
    category: "basic",
    label: "Przycisk zamknięcia",
    content: {
      type: "close-button",
    },
    droppable: true,
  });

  blockManager.add("template-1", {
    id: "template-1",
    category: "templates",
    label: "Szablon 1",
    content: {
      type: "template-1",
    },
    droppable: true,
  });

  blockManager.add("code", {
    id: "code",
    category: "extra",
    label: "Kod",
    content: {
      type: "custom-code",
    },
    droppable: true,
  });

  blockManager.add("template-2", {
    id: "template-2",
    category: "templates",
    label: "Szablon 2",
    content: {
      type: "template-2",
    },
    droppable: true,
  });

  editor.onReady(() => {

    const blocks = blockManager.getAll();

    const templates = blocks.filter(block => block.get('category').attributes.id == 'templates');
    const filteredBlocks = blocks.filter(block => block.get('category').attributes.id != 'templates');

    const templatesEl = blockManager.render(templates, { external: true });
    const blocksEl = blockManager.render(filteredBlocks, { external: true });

    document.getElementById('templates').appendChild(templatesEl);
    document.getElementById('blockmanager').appendChild(blocksEl);

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
    
    blockManager.getCategories().each((ctg) => {
        ctg.view.el.querySelector('.collapse-title').innerHTML = categoryLabels[ctg.attributes.id];
    });

    document.getElementById('blocks-temp').remove()
  })