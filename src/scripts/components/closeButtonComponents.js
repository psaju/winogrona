export const closeButtonComponents = (editor) => {
  editor.DomComponents.addType("close-button", {
    isComponent: (el) => el.tagName === "close-button",
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: "span",
        draggable: ".popup-wrapper-sub",
        droppable: false,
        stylable: true,
        components: "<span></span>",
        attributes: {
          name: "popup-close",
          type: "close",
        },
        style: {
          "box-sizing": "border-box",
          position: "absolute",
          inset: "10px 10px auto auto",
          background: "#d1d1d1",
          width: "30px",
          height: "30px",
          "border-radius": "100%",
          "font-size": "2rem",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          cursor: "pointer",
        },
        styles: `
              [name="popup-close"]:before{
                content: '\\d7'
              } `,
        traits: [
          {
            name: "replacable",
            type: "checkbox",
            label: "replacable",
          },
        ],
      },
    },
  });

  editor.DomComponents.addType("close-button-2", {
    extend: "close-button",
    model: {
      defaults: {
        style: {
          "box-sizing": "border-box",
          position: "absolute",
          inset: "10px 10px auto auto",
          background: "#f00",
          color: "#fff",
          width: "30px",
          height: "30px",
          "border-radius": "100%",
          "font-size": "2rem",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          cursor: "pointer",
        },
      },
    },
  });

  editor.DomComponents.addType("close-button-heavy", {
    extend: "close-button",
    model: {
      defaults: {
        attributes: {
          name: "popup-close-heavy",
          type: "close",
        },
        style: {
          "box-sizing": "border-box",
          position: "absolute",
          inset: "10px 10px auto auto",
          background: "transparent",
          width: "30px",
          height: "30px",
          "font-size": "2rem",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          cursor: "pointer",
        },

        styles: `
                  [name="popup-close-heavy"]:before{
                    content: "";
                    position: absolute;
                    height: 12px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -6px;
                    background: #000;
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-heavy"]:after{
                    content: "";
                    position: absolute;
                    height: 12px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -6px;
                    background: #000;
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                    transition: all .3s;
                  }
                  
                  [name="popup-close-heavy"]:hover:before, [name="popup-close-heavy"]:hover:after {
                    background: #333;
                  }`                
                  ,
      },
    },
  });

  editor.DomComponents.addType("close-button-black", {
    extend: "close-button",
    model: {
      defaults: {
        attributes: {
          name: "popup-close-black",
          type: "close",
        },
        style: {
          "box-sizing": "border-box",
          position: "absolute",
          inset: "10px 10px auto auto",
          background: "transparent",
          width: "30px",
          height: "30px",
          "font-size": "2rem",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          cursor: "pointer",
        },

        styles: `
                  [name="popup-close-black"]:before{
                    content: "";
                    position: absolute;
                    height: 8px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -4px;
                    background: #000;
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-black"]:after{
                    content: "";
                    position: absolute;
                    height: 8px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -4px;
                    background: #000;
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-black"]:hover:before, [name="popup-close-black"]:hover:after {
                    background: #333;
                  }`,
      },
    },
  });

  editor.DomComponents.addType("close-button-thick", {
    extend: "close-button",
    model: {
      defaults: {
        attributes: {
          name: "popup-close-thick",
          type: "close",
        },
        style: {
          "box-sizing": "border-box",
          position: "absolute",
          inset: "10px 10px auto auto",
          background: "transparent",
          width: "30px",
          height: "30px",
          "font-size": "2rem",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          cursor: "pointer",
        },

        styles: `
                  [name="popup-close-thick"]:before{
                    content: "";
                    position: absolute;
                    height: 4px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -2px;
                    background: #000;
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-thick"]:after{
                    content: "";
                    position: absolute;
                    height: 4px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -2px;
                    background: #000;
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-thick"]:hover:before, [name="popup-close-thick"]:hover:after {
                    background: #333;
                  }`,
      },
    },
  });

  editor.DomComponents.addType("close-button-hairline", {
    extend: "close-button",
    model: {
      defaults: {
        attributes: {
          name: "popup-close-hairline",
          type: "close",
        },
        style: {
          "box-sizing": "border-box",
          position: "absolute",
          inset: "10px 10px auto auto",
          background: "transparent",
          width: "30px",
          height: "30px",
          "font-size": "2rem",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          cursor: "pointer",
        },

        styles: `
                  [name="popup-close-hairline"]:before{
                    content: "";
                    position: absolute;
                    height: 4px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -2px;
                    background: #000;
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-hairline"]:after{
                    content: "";
                    position: absolute;
                    height: 4px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -2px;
                    background: #000;
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-hairline"]:hover:before, [name="popup-close-hairline"]:hover:after {
                    background: #333;
                  }`,
      },
    },
  });

  editor.DomComponents.addType("close-button-heavy-r", {
    extend: "close-button",
    model: {
      defaults: {
        attributes: {
          name: "popup-close-heavy-r",
          type: "close",
        },
        style: {
          "box-sizing": "border-box",
          position: "absolute",
          inset: "10px 10px auto auto",
          background: "transparent",
          width: "30px",
          height: "30px",
          "font-size": "2rem",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          cursor: "pointer",
        },

        styles: `
                  [name="popup-close-heavy-r"]:before{
                    content: "";
                    position: absolute;
                    height: 12px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -6px;
                    background: #000;
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                    border-radius: 5px;
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-heavy-r"]:after{
                    content: "";
                    position: absolute;
                    height: 12px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -6px;
                    background: #000;
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                    border-radius: 5px;
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-heavy-r"]:hover:before, [name="popup-close-heavy-r"]:hover:after {
                    background: #333;
                  }`,
      },
    },
  });

  editor.DomComponents.addType("close-button-black-r", {
    extend: "close-button",
    model: {
      defaults: {
        attributes: {
          name: "popup-close-black-r",
          type: "close",
        },
        style: {
          "box-sizing": "border-box",
          position: "absolute",
          inset: "10px 10px auto auto",
          background: "transparent",
          width: "30px",
          height: "30px",
          "font-size": "2rem",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          cursor: "pointer",
        },

        styles: `
                  [name="popup-close-black-r"]:before{
                    content: "";
                    position: absolute;
                    height: 8px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -4px;
                    background: #000;
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                    border-radius: 5px;
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-black-r"]:after{
                    content: "";
                    position: absolute;
                    height: 8px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -4px;
                    background: #000;
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                    border-radius: 5px;
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-black-r"]:hover:before, [name="popup-close-black-r"]:hover:after {
                    background: #333;
                  }`,
      },
    },
  });

  editor.DomComponents.addType("close-button-thick-r", {
    extend: "close-button",
    model: {
      defaults: {
        attributes: {
          name: "popup-close-thick-r",
          type: "close",
        },
        style: {
          "box-sizing": "border-box",
          position: "absolute",
          inset: "10px 10px auto auto",
          background: "transparent",
          width: "30px",
          height: "30px",
          "font-size": "2rem",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          cursor: "pointer",
        },

        styles: `
                  [name="popup-close-thick-r"]:before{
                    content: "";
                    position: absolute;
                    height: 4px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -2px;
                    background: #000;
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                    border-radius: 5px;
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-thick-r"]:after{
                    content: "";
                    position: absolute;
                    height: 4px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -2px;
                    background: #000;
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                    border-radius: 5px;
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-thick-r"]:hover:before, [name="popup-close-thick-r"]:hover:after {
                    background: #333;
                  }`,
      },
    },
  });

  editor.DomComponents.addType("close-button-hairline-r", {
    extend: "close-button",
    model: {
      defaults: {
        attributes: {
          name: "popup-close-hairline-r",
          type: "close",
        },
        style: {
          "box-sizing": "border-box",
          position: "absolute",
          inset: "10px 10px auto auto",
          background: "transparent",
          width: "30px",
          height: "30px",
          "font-size": "2rem",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          cursor: "pointer",
        },

        styles: `
                  [name="popup-close-hairline-r"]:before{
                    content: "";
                    position: absolute;
                    height: 4px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -2px;
                    background: #000;
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                    border-radius: 5px;
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-hairline-r"]:after{
                    content: "";
                    position: absolute;
                    height: 4px;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    margin-top: -2px;
                    background: #000;
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                    border-radius: 5px;
                    transition: all .3s;
                  } 
                  
                  [name="popup-close-hairline-r"]:hover:before, [name="popup-close-hairline-r"]:hover:after {
                    background: #333;
                  }`,
      },
    },
  });
};
