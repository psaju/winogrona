export const closeButtons = (editor) => {
  const blockManager = editor.BlockManager;

  function replaceComponent(block, editor) {
    const index = editor.getSelected().index();
    const parent = editor.getSelected().parent();

    parent.append(block.get("content"), { at: index });
    editor.getSelected().remove();

    editor.select(parent.getChildAt(index));
    editor.Modal.close();
  }

  blockManager.add("close-button", {
    id: "close-button-1",
    category: "basic",
    label: "Przycisk zamknięcia szary",
    content: {
      type: "close-button",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "close",
    },
    media: '<img src="assets/components/close-button-1.png" />',
  });

  blockManager.add("close-button-2", {
    id: "close-button-2",
    category: "styled",
    label: "Przycisk zamknięcia czerwony",
    content: {
      type: "close-button-2",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "close",
    },
    media: '<img src="assets/components/close-button-2.png" />',
  });

  blockManager.add("close-button-hairline", {
    id: "close-button-hairline",
    category: "styled",
    label: "Przycisk zamknięcia - cienki",
    content: {
      type: "close-button-hairline",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "close",
    },
    media: '<img src="assets/components/close-button-hairline.png" />',
  });

  blockManager.add("close-button-thick", {
    id: "close-button-thick",
    category: "styled",
    label: "Przycisk zamknięcia - normalny",
    content: {
      type: "close-button-thick",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "close",
    },
    media: '<img src="assets/components/close-button-thick.png" />',
  });

  blockManager.add("close-button-black", {
    id: "close-button-black",
    category: "styled",
    label: "Przycisk zamknięcia - pogrubiony",
    content: {
      type: "close-button-black",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "close",
    },
    media: '<img src="assets/components/close-button-black.png" />',
  });

  blockManager.add("close-button-heavy", {
    id: "close-button-heavy",
    category: "styled",
    label: "Przycisk zamknięcia - gruby",
    content: {
      type: "close-button-heavy",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "close",
    },
    media: '<img src="assets/components/close-button-heavy.png" />',
  });

  blockManager.add("close-button-hairline-r", {
    id: "close-button-hairline-r",
    category: "styled",
    label: "Przycisk zamknięcia - cienki (zaokrąglony)",
    content: {
      type: "close-button-hairline-r",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "close",
    },
    media: '<img src="assets/components/close-button-hairline-r.png" />',
  });

  blockManager.add("close-button-thick-r", {
    id: "close-button-thick-r",
    category: "styled",
    label: "Przycisk zamknięcia - normalny (zaokrąglony)",
    content: {
      type: "close-button-thick-r",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "close",
    },
    media: '<img src="assets/components/close-button-thick-r.png" />',
  });

  blockManager.add("close-button-black-r", {
    id: "close-button-black-r",
    category: "styled",
    label: "Przycisk zamknięcia - pogrubiony (zaokrąglony)",
    content: {
      type: "close-button-black-r",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "close",
    },
    media: '<img src="assets/components/close-button-black-r.png" />',
  });

  blockManager.add("close-button-heavy-r", {
    id: "close-button-heavy-r",
    category: "styled",
    label: "Przycisk zamknięcia - gruby (zaokrąglony)",
    content: {
      type: "close-button-heavy-r",
    },
    droppable: true,
    onClick: (block, editor) => replaceComponent(block, editor),
    attributes: {
      type: "close",
    },
    media: '<img src="assets/components/close-button-heavy-r.png" />',
  });
};
