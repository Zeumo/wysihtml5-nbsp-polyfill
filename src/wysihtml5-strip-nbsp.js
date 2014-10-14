(function () {
  if (!window.wysihtml5) return;

  var instance;
  var Editor = wysihtml5.Editor;

  wysihtml5.Editor = function(editableElement, config) {
    var self = Editor.prototype;

    self.on('change', stripNbsp);
    self.on('newword:composer', stripNbsp);

    instance = new Editor(editableElement, config);
    return instance;
  };

  var stripNbsp = _.debounce(function() {
    var val = editor.getValue().replace(/&nbsp;/g, ' ');
    editor.setValue(val, true);

    restoreCursorPosition();
  }, 500);

  var restoreCursorPosition = function() {
    var area = instance.editableElement;
    if (document.activeElement === instance.composer.editableArea) {
      var length = area.value.length;

      console.log(length);
      area.focus();
      console.log(instance.composer.editableArea);
      instance.composer.editableArea.setSelectionRange(length, length);
    }
  };
})();
