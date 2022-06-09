export const textVariablesComponent = (editor) => {

  editor.Components.addType('variable', {
    model: {
      defaults: {
        tagName: 'span',
        textable: true,
        placeholder: '{{ VARIABLE-1 }}',
        draggable: 'p',
      },
      getInnerHTML() {
        return this.get('placeholder');
      },
    },
    view: {
      events: {
        'change': 'updatePlaceholder',
      },
      updatePlaceholder(ev) {
        this.model.set({ placeholder: ev.target.value });
      },
      onAttrUpdate() {
	      const viewStyle = 'padding: 0px 5px 1px; border: 1px solid #b300fd';
        this.el.setAttribute('style', viewStyle);
      },
      onRender() {
        const { model, el } = this;
        const select = document.createElement('select');
        const options = [ 
          {'[iai:client_address]': 'Adres klienta'},
          {'[iai:client_city]': 'Miasto klienta'},
          {'[iai:client_company_name]': 'Nazwa firmy klienta'},
         ];
        select.innerHTML = options.map(item => 
        	`<option value="{{ ${Object.keys(item)} }}">${item[Object.keys(item)]}</option>`
        ).join('');
        el.innerHTML = '';
        el.appendChild(select);
        select.setAttribute('style', 'padding: 0; border: none; appearance: none;');
        select.value = model.get('placeholder');
      },
    }
  });
};