(function () {
  if (!window.wysihtml5) return;

  var instance;
  var Editor = wysihtml5.Editor;

  wysihtml5.Editor = function(editableElement, config) {
    var self = Editor.prototype;

    self.on('change', stripNbsp);

    instance = new Editor(editableElement, config);
    return instance;
  };

  var stripNbsp = function() {
    var val = instance.getValue().replace(/&nbsp;/g, ' ');
    instance.setValue(val, true);
  };
})();
