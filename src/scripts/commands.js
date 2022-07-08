import {
  editor
} from "./editor.js";

import {closeButtons} from "./blocks/closeButtons.js"
import { textVariables } from "./blocks/textVariables.js";
import {buttons} from "./blocks/buttons.js"

const blockManager = editor.BlockManager;
const undoManager = editor.UndoManager;
const categoryLabels = {
  basic: `<div class="c_heading">Basic</div><div class="c_desc">Bloki, grafiki etc.</div>`,
  layout: `<div class="c_heading">Układy</div><div class="c_desc">Dwu, trzykolumnowe etc.</div>`,
  forms: `<div class="c_heading">Formularze</div><div class="c_desc">inputy, przyciski etc</div>`,
  templates: '<div class="c_heading">Szablony</div><div class="c_desc">gotowe wzory</div>',
  extra: '<div class="c_heading">Extra</div><div class="c_desc">własny kod, zmienne</div>',
}

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

editor.Commands.add("open-assets", {
  run(editor) {
    document.querySelector("body").classList.add("loading");

    const modal = document.getElementById('custom-modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-content');
    modalTitle.innerHTML = '';
    modalBody.innerHTML = '';

    const html = '<iframe id="uploadFrame" src="/panel/cms-files.php?tiny=true&type=image&dir=product" frameborder="0"></iframe>';
    modalBody.insertAdjacentHTML("beforeend", html);

    document
      .getElementById("uploadFrame")
      .addEventListener("load", function (e) {
        prepareIframe();
      });
  },
});

editor.on("component:remove", model => {
  if (!editor.getComponents().length) {
    editor.setStyle('');
  }
})

editor.Commands.add('iai-replace', (editor, sender) => {
  const sidebar = document.querySelector('#swap-sidebar');
  const type = editor.getSelected().get('attributes').type
  const html = document.querySelector('html');

  const blocks = editor.BlockManager.getAll();
  const templates = blocks.filter(block => {
    // if (Array.isArray(block.get('content')) && block.get('content')[0].type == type) return block;
    if (block.get('attributes').type === type) return block;
  });
  
  const templatesEl = editor.BlockManager.render(templates, { external: true, ignoreCategories: true });
  sidebar.insertAdjacentElement('afterbegin', templatesEl);
  sidebar.dataset.type = type;
  html.classList.add('swap-elements');
});

editor.Commands.add('iai-clearswap', (editor, sender) => {
  const sidebar = document.querySelector('#swap-sidebar');
  const html = document.querySelector('html');
  sidebar.innerHTML = '';
  html.classList.remove('swap-elements');

});

editor.Commands.add('iai-wrap', (editor, sender) => {
  const image = editor.getSelected();
  const index = image.index();
  const parent = image.parent();
  
  parent.append('<a style="display:inline-block;"></a>', {at: index});

  const link = parent.getChildAt(index);
  link.append(image);
  editor.select(link);
});

editor.onReady(() => {
  closeButtons(editor);
  textVariables(editor);
  buttons(editor);
})

editor.onReady(() => {
  blockManager.getCategories().each((ctg) => ctg.set("open", false));
  undoManager.start();
});

let modalTitle, modalBody;
editor.on('modal', (props) => {

  const modal = document.getElementById('custom-modal');
  modalTitle = modal.querySelector('.modal-title');
  modalBody = modal.querySelector('.modal-content');

  if (props.open) {
    // clear the current elements
    modalTitle.innerHTML = '';
    modalBody.innerHTML = '';
    // Add new elements
    modalTitle.appendChild(props.title);
    modalBody.appendChild(props.content);
    document.getElementById('custom-modal-input').checked = true;
  } else {
    document.getElementById('custom-modal-input').checked = false;
  }
});

// define this event handler after editor is defined
// like in const editor = grapesjs.init({ ...config });
editor.on('component:selected', () => {

  addBasicTraits();
  // whenever a component is selected in the editor

  // set your command and icon here
  const replaceCommand = 'iai-replace';
  const clearSwap = 'iai-clearswap';
  const replaceCommandIcon = 'icon-arrows-cw';

  const wrapImageCommand = 'iai-wrap';
  const wrapImageIcon = 'icon-link-ext-alt';

  const replaceImage = 'open-assets';
  const replaceImageIcon = 'icon-arrows-cw';

  // get the selected componnet and its default toolbar
  const selectedComponent = editor.getSelected();
  let defaultToolbar = selectedComponent.get('toolbar');
  const type = selectedComponent.get('type');;
  const swapType = document.querySelector('#swap-sidebar').dataset?.type;
  

  // check if this command already exists on this component toolbar
  const replaceCommandExists = defaultToolbar.some(item => item.command === replaceCommand);
  const wrapCommandExists = defaultToolbar.some(item => item.command === wrapImageCommand);
  const replaceImageCommandExists = defaultToolbar.some(item => item.command === replaceImage);
  const hasReplaceAttribute = selectedComponent.getTrait('replacable');

  // if it doesn't already exist, add it
  if (hasReplaceAttribute && (type !== swapType || typeof swapType == 'undefined')) {
    editor.runCommand(clearSwap);
    editor.runCommand(replaceCommand);
  } else if (!hasReplaceAttribute) {
    editor.runCommand(clearSwap);
  }


  if(!wrapCommandExists && type == 'image' && selectedComponent.parent().get('type') !== 'link'){
    defaultToolbar = [...defaultToolbar, {
      attributes: {
        class: wrapImageIcon
      },
      command: wrapImageCommand
    }];

    selectedComponent.set({
      toolbar: defaultToolbar
    });
  }

  if(type == 'image' && selectedComponent.parent().get('type') === 'link'){
    let newToolbar = defaultToolbar.filter(c => c.command !== 'iai-wrap');
    selectedComponent.set({
      toolbar: [...newToolbar]
    });
  }

  if(type == 'image' && !replaceImageCommandExists){
    defaultToolbar = [...defaultToolbar, {
      attributes: {
        class: replaceImageIcon
      },
      command: replaceImage
    }];

    selectedComponent.set({
      toolbar: defaultToolbar
    });
  }

});

editor.onReady(() => {

  const blocks = blockManager.getAll();

  const templates = blocks.filter(block => block.get('category').attributes.id == 'templates');
  const filteredBlocks = blocks.filter(block => block.get('category').attributes.id != 'templates' && block.get('category').attributes.id != 'styled');

  const templatesEl = blockManager.render(templates, { external: true });
  const blocksEl = blockManager.render(filteredBlocks, { external: true });

  document.getElementById('templates').appendChild(templatesEl);
  document.getElementById('blockmanager').appendChild(blocksEl);

  document.querySelectorAll('.gjs-block-category').forEach((c, index) => {
    c.setAttribute('tabindex', '0');
    c.classList.add('collapse', 'collapse-arrow', 'group');
    c.insertAdjacentHTML('afterbegin', '<input type="checkbox" class="peer"/>');
    c.querySelector('.gjs-title').classList.add('collapse-title', 'peer-checked:bg-white');
    c.querySelector('.gjs-title').classList.remove('gjs-title');
    c.querySelector('.gjs-blocks-c').removeAttribute('style');
    c.querySelector('.gjs-blocks-c').classList.add('collapse-content', 'peer-checked:bg-white');
    c.querySelector('.gjs-blocks-c').classList.remove('gjs-blocks-c');
    c.querySelector('i').remove();
  });
  
  blockManager.getCategories().each((ctg) => {
      ctg.view.el.querySelector('.collapse-title').innerHTML = categoryLabels[ctg.attributes.id];
  });

  document.getElementById('blocks-temp').remove()
});

editor.onReady(() => {
  const basicStyle = document.querySelector('.gjs-sm-sector__basic').querySelector(' .gjs-sm-properties');
  const basicStyleBar = document.querySelector('#basic-style');

  const selects = basicStyle.querySelectorAll('select');
  const inputs = basicStyle.querySelectorAll('input');

  [...basicStyle.querySelectorAll('.gjs-sel-arrow')].forEach(function(el){
    el.remove();
  });

  [...selects].forEach(function(el){
    el.classList.add('select');
  });

  [...inputs].forEach(function(el){
    el.classList.add('input');
  });


  basicStyleBar.insertAdjacentElement('afterbegin', basicStyle);
  document.querySelector('.gjs-sm-sector__basic').remove();
});

// TODO - Add RTE action
/*
const rte = editor.RichTextEditor;
rte.actions[0].result(rte.globalRte)
*/

function addBasicTraits(){
  const traits = editor.getSelected().getTraits();
  const excluded = ['type', 'required', 'replaceable', 'checked'];
  const container = document.querySelector('#basic-trait-container');

  setTimeout(function(){
    const tpl = `
    <div id="basic-traits" class="flex justify-center items-end gap-3 h-full">
      ${traits.filter(t => !excluded.includes(t.attributes.name)).map(trait => {
        return `<div>
          ${trait.get('type') !== 'button' ? `<label class="label"><span class="label-text">${trait.attributes.name}</span></label>` : ``}
          ${getInput(trait.el.outerHTML, trait.attributes.value, trait.attributes.name)}
        </div>`
      }).join('')}
    </div>
  `;
    
  container.innerHTML = tpl;

  }, 100);
  

};

function getInput(traitHtml, traitValue, traitType){
  let traitEl = document.createElement('div');
  traitEl.innerHTML = traitHtml;
  traitEl.firstChild.setAttribute('value', traitValue);
  traitEl.firstChild.dataset.type = traitType;

  if (traitEl.querySelector('button')){
    traitEl.querySelector('button').classList.add('btn-primary');
  }

  if (traitEl.querySelector('input')){
    traitEl.querySelector('input').classList.add('input');
  }

  return traitEl.firstChild.outerHTML;
}

document.addEventListener('change', function(event) {
  if (event.target.matches('#basic-traits :where(input, select)')) {
    event.preventDefault();
    
    const input = event.target;
    const value = input.value;
    const component = editor.getSelected();
    const type = input.dataset.type;

    let newObj = {};
    newObj[type] = value;

    component.addAttributes(newObj)

  }
}, false);

document.addEventListener('click', function(event) {
  if (event.target.matches('#basic-traits :where(button)')) {
    event.preventDefault();

    const button = event.target;
    const type = button.dataset.type;
    editor.getSelected().getTrait(type).view.el.querySelector('button').click()
  }
}, false);