import { editor } from "./editor.js";

const blockManager = editor.BlockManager;
const categoryLabels = {
    basic: `<div class="c_heading">Basic</div><div class="c_desc">Bloki, grafiki etc.</div>`,
    layout: `<div class="c_heading">Układy</div><div class="c_desc">Dwu, trzykolumnowe etc.</div>`,
    form: `<div class="c_heading">Formularze</div><div class="c_desc">inputy, przyciski etc</div>`
}

blockManager.add("big_label", {
    label: "Heading",
    content: '<h2 class="big_label">Heading</h2>',
    category: 'basic',
    attributes: {
      title: "Dodaj nagłówek h2",
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
      type: "popup-wrapper",
    },
    droppable: true,
  });

  blockManager.add("wrapper-1-1", {
    id: "wrapper-1-1",
    category: "layout",
    label: "2 Kolumny 1/1",
    content: {
      type: "wrapper-1-1",
    },
    droppable: true,
  });
  
  blockManager.add("form-1", {
    id: "form-1",
    category: "form",
    label: "Zapis do newslettera z imieniem i nazwiskiem",
    content: {
      type: "form-1",
    },
    droppable: true,
  });

  editor.onReady(() => {
    blockManager.getCategories().each((ctg) => {
        ctg.view.el.querySelector('.collapse-title').innerHTML = categoryLabels[ctg.attributes.id];
    });
  })