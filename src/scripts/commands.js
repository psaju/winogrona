import {
  editor
} from "./editor.js";

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

editor.on("component:selected", () => {
  document.querySelector('.tab.components').click();
  document.querySelector('input.css').setAttribute('checked', 'checked');
});

editor.on("component:remove", model => {
  if (!editor.getComponents().length) {
    editor.setStyle('');
  }
})

editor.Commands.add('iai-replace', (editor, sender) => {
  const modal = editor.Modal;
  const type = editor.getSelected().get('type');

  const blocks = editor.BlockManager.getAll();
  const templates = blocks.filter(block => {
    if (Array.isArray(block.get('content')) && block.get('content')[0].type == type) return block;
    if (block.get('content').type === type) return block;
  });
  
  const templatesEl = editor.BlockManager.render(templates, { external: true, ignoreCategories: true });
  
  modal.setContent(templatesEl);
  modal.setTitle('Wybierz nowy komponent');

  modal.open()
});