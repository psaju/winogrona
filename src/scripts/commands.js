import { editor } from "./editor.js";

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
    const parser = new DOMParser();
    const fileModal = document.getElementById("filemanager");
    const html =
      '<iframe id="uploadFrame" src="/panel/cms-files.php?tiny=true&type=image&dir=product" frameborder="0"></iframe>';
    fileModal.insertAdjacentHTML("beforeend", html);
    document
      .getElementById("uploadFrame")
      .addEventListener("load", function (e) {
        prepareIframe();
      });
  },
});

editor.on("component:selected", () => {
    document.querySelector('.tab.components').click();
    document.querySelector('input.css').setAttribute('checked','checked');
});