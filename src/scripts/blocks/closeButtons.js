export const closeButtons = (editor) => {

const blockManager = editor.BlockManager;

function replaceComponent(block, editor){
    const index = editor.getSelected().index();
    const parent = editor.getSelected().parent();
    
    parent.append(block.get("content"), {at: index});
    editor.getSelected().remove();

    editor.select(parent.getChildAt(index));
    editor.Modal.close();
  }

blockManager.add("close-button", {
  id: "close-button-1",
  category: "basic",
  label: "Przycisk zamknięcia szary",
  content: {
      type: "close-button"
    },
  droppable: true,
  onClick: (block, editor) => replaceComponent(block, editor),
  attributes: {
      type: 'close'
  },
  media: '<img src="assets/components/close-button-1.png" />'
});

blockManager.add("close-button-2", {
  id: "close-button-2",
  category: "styled",
  label: "Przycisk zamknięcia czerwony",
  content: { 
      type: "close-button-2" 
    },
  droppable: true,
  onClick: (block, editor) => replaceComponent(block, editor),
  attributes: {
    type: 'close'
    },
  media:'<img src="assets/components/close-button-2.png" />'
});

}
