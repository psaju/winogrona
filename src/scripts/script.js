function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function prepareIframe() {
    document.getElementById('my-modal-3').checked = true;
    const iframe = document.getElementById('uploadFrame');
    const iframeContents = iframe.contentDocument || iframe.contentWindow.document;
    const buttons = iframeContents.querySelectorAll('.formbuttons');
  
    document.querySelector('body').classList.remove('loading');
  
    buttons.forEach(item => {
      item.addEventListener('click', event => {
        const clickString = item.getAttribute('onclick');
        clickString.replace("insertUrl('", "").replace("', '1')", "");
        document.getElementById('my-modal-3').checked = false;
        iframe.remove();
      })
    });
  
    document.getElementById('uploadFrame').contentWindow.insertUrl = function (img) {
      var extension = img.substr((img.lastIndexOf('.') + 1));
  
      if (extension == 'jpg' || 'jpeg' || 'png' || 'gif') {
        const cmp = editor.getSelected();
        cmp.attributes.attributes.src = img;
        cmp.set('src', img);
        cmp.view.el.src = img;
        cmp.setStyle({width: 'auto', height: 'auto'})
  
        document.getElementById('my-modal-3').checked = false;
        iframe.remove();
      } else {
        alert('Wybrano plik o nieobsługiwanym formacie!');
      }
    };
  }