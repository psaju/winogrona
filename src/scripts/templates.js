export const templates = (editor) => {

  editor.DomComponents.addType("template-1", {
    isComponent: (el) => el.tagName === "template-1",
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: "div",
        draggable: true,
        droppable: true,
        stylable: true,
        components: `
          <div id="ihye" class="popup"><div id="imjh"></div><div id="ijha" class="popup-wrapper-sub"><div id="i05s"></div><div id="i1mi"><div id="i4ce"></div><h2 id="ilp2m">RABAT 25%</h2><p id="iut8h">Ciesz się rabatem 25% na cały asortyment do końca tygodnia!</p><p id="iuyrb">SALE25</p></div><div id="i3ad"><div id="iylm"></div><img src="assets/sale.jpg" id="i5ce"/></div><span name="popup-close" id="i2t4i"><span></span></span></div></div>
          `,
        styles:`
          * { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ihye{box-sizing:border-box;max-width:757px;width:calc(100% - 20px);position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);min-height:50px;overflow-x:hidden;overflow-y:hidden;}#imjh{box-sizing:border-box;}#ijha{box-sizing:border-box;display:flex;flex-wrap:wrap;width:100%;height:100%;min-height:50px;}#i05s{box-sizing:border-box;}#i1mi{box-sizing:border-box;min-height:50px;display:block;padding-top:1rem;padding-right:1rem;padding-bottom:1rem;padding-left:1rem;width:50%;justify-content:center;align-items:flex-start;}#i4ce{box-sizing:border-box;}#i3ad{box-sizing:border-box;min-height:50px;display:block;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;width:50%;}#iylm{box-sizing:border-box;}#i5ce{width:100%;height:100%;}.popup-wrapper-sub{align-items:center;}.popup{border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(134, 134, 134);border-right-color:rgb(134, 134, 134);border-bottom-color:rgb(134, 134, 134);border-left-color:rgb(134, 134, 134);border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;box-shadow:black 0px 0px 5px 0px;}[name="popup-close"]::before{content:"×";}#i2t4i{box-sizing:border-box;position:absolute;top:8px;right:8px;text-align:center;font-size:2rem;display:inline;line-height:1.5rem;}#ilp2m{font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif;text-align:center;font-size:2.5rem;}#iut8h{font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif;text-align:center;font-size:1.5rem;}#iuyrb{font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif;font-weight:900;font-size:2.5rem;text-align:center;color:rgb(237, 96, 96);border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;background-color:rgb(255, 206, 206);border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-top-style:dotted;border-right-style:dotted;border-bottom-style:dotted;border-left-style:dotted;border-top-color:rgb(237, 96, 96);border-right-color:rgb(237, 96, 96);border-bottom-color:rgb(237, 96, 96);border-left-color:rgb(237, 96, 96);border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;padding-top:0.5rem;padding-right:0.5rem;padding-bottom:0.5rem;padding-left:0.5rem;}@media (max-width: 460px){#i1mi{width:100%;order:2;}.popup-wrapper-sub{display:flex;flex-wrap:wrap;align-items:center;}.popup{display:flex;flex-wrap:wrap;}#i3ad{width:100%;order:1;}}
        `
      },
    },
  });

  editor.DomComponents.addType("template-2", {
    isComponent: (el) => el.tagName === "template-2",
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: "div",
        draggable: true,
        droppable: true,
        stylable: true,
        components: `
        <div id="ihye" class="popup"><div id="io3r"></div><div id="ijha" class="popup-wrapper-sub"><div id="iufp"></div><div id="i1mi"><div id="ixgk"></div><img src="assets/newsletter.jpg" id="iaf1"/></div><span name="popup-close" id="igdsb"><span></span></span><div id="i3ad"><div id="i5ei"></div><h2 id="i6bh4">Nie przegap nowości i ważnych informacji</h2><div class="form" id="i1qaw"><form action="/settings.php" method="post" id="ifwyd"><div class="form-group"><div class="has-feedback"><input name="mailing_email" id="mailing_email" type="text" data-validate="email" class="newsletter_form_field form-control validate"/><span class="form-control-feedback"></span></div></div><div class="form-group"><div class="has-feedback"><span class="form-control-feedback"></span></div></div><input id="mailing_action_contact" name="mailing_action" value="add" type="hidden"/><button type="submit" id="newsletter_button_add" value="Zapisz się" class="btn --solid">Zapisz się</button></form></div></div></div></div>
          `,
        styles:`
        * { box-sizing: border-box; } body {margin: 0;}#ihye{box-sizing:border-box;max-width:757px;width:calc(100% - 20px);position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);min-height:50px;}#io3r{box-sizing:border-box;}#ijha{box-sizing:border-box;display:flex;flex-wrap:wrap;width:100%;height:100%;min-height:50px;}#iufp{box-sizing:border-box;}#i1mi{box-sizing:border-box;min-height:50px;display:block;padding:0 0 0 0;width:100%;}#ixgk{box-sizing:border-box;}#i3ad{box-sizing:border-box;min-height:50px;display:block;padding:0 2rem 1rem 2rem;width:100%;}#i5ei{box-sizing:border-box;}#iaf1{width:100%;height:100%;}#i6bh4{text-align:center;color:#e48929;font-size:2.5rem;}.popup{border-radius:10px;border:1px solid #e29524;box-shadow:0 0 10px 3px #e89610 ;}[name="popup-close"]::before{content:"×";}#igdsb{box-sizing:border-box;position:absolute;top:-15px;right:-15px;border-radius:100%;width:30px;height:30px;text-align:center;background-color:#e89712;font-size:1.8rem;line-height:27px;color:#ffffff;transition:all 0.3s ease;transform:0 0 0 1 1 1;}#igdsb:hover{transform:translate(90deg) 0 0 1 1 1;opacity:0.85;}.form:hover{justify-content:center;text-align:center;}.form{justify-content:center;align-items:center;text-align:center;}.newsletter_form_field.form-control.validate{min-height:40px;min-width:200px;background-color:#ffedcf;border:1px solid #e29524;width:100%;border-radius:10px;}#i1qaw{min-height:50px;display:flex;padding:1rem;}#ifwyd{width:100%;}.btn.--solid{background-color:#e89712;font-family:Times New Roman, Times, serif;font-size:1.5rem;color:#ffffff;margin:1rem 0 0 0;border:0 solid black;padding:10px 15px 10px 15px;border-radius:10px;width:100%;}@media (max-width: 460px){#i6bh4{font-size:2rem;}#igdsb{top:10px;right:10px;}#iaf1{border-radius:10px;}}
        `
      },
    },
  });
}