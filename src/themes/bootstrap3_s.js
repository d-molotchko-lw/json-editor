JSONEditor.defaults.themes.bootstrap3_s = JSONEditor.defaults.themes.bootstrap3.extend({
  getFormInputLabel: function(text) {
    var el = document.createElement('label');
    var chk = document.createElement('input');
    chk.type = 'checkbox';
    chk.className = 'actual-field';
    el.appendChild(chk);
    el.appendChild(document.createTextNode(text));
    return el;
  }
});
