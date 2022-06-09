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
  media:
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z M383.28,340.858l-42.422,42.422 L256,298.422l-84.858,84.858l-42.422-42.422L213.578,256l-84.858-84.858l42.422-42.422L256,213.578l84.858-84.858l42.422,42.422 L298.422,256L383.28,340.858z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
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
  media:
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z M383.28,340.858l-42.422,42.422 L256,298.422l-84.858,84.858l-42.422-42.422L213.578,256l-84.858-84.858l42.422-42.422L256,213.578l84.858-84.858l42.422,42.422 L298.422,256L383.28,340.858z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
});

}
