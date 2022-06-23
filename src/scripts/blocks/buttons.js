export const buttons = (editor) => {
  const blockManager = editor.BlockManager;

  function replaceComponent(block, editor) {
    const index = editor.getSelected().index();
    const parent = editor.getSelected().parent();

    parent.append(block.get("content"), { at: index });
    editor.getSelected().remove();

    editor.select(parent.getChildAt(index));
    editor.Modal.close();
  }

  blockManager.add("button-29", {
    id: "button-29",
    category: "styled",
    label: "Przycisk",
    content: {
      type: "button-29",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "button",
    },
    media: '<img src="assets/components/button-29.png" />',
  });

  blockManager.add("button-30", {
    id: "button-30",
    category: "basic",
    label: "Przycisk 2",
    content: {
      type: "button-30",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "button",
    },
    media: '<img src="assets/components/button-30.png" />',
  });

  blockManager.add("button-21", {
    id: "button-21",
    category: "styled",
    label: "Przycisk 3",
    content: {
      type: "button-21",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "button",
    },
    media: '<img src="assets/components/button-21.png" />',
  });

  blockManager.add("button-1", {
    id: "button-1",
    category: "styled",
    label: "Przycisk 4",
    content: {
      type: "button-1",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "button",
    },
    media: '<img src="assets/components/button-1.png" />',
  });
};
