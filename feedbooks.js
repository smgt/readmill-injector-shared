(function() {
  Readmill.appendChild("a[href$='.epub'][data-role='button']", function(el) {
    return Readmill.button(el.href, function(button) {
      button.style.marginTop = "4px";
      return button;
    });
  });

  Readmill.appendChild(".buttons a[href$='.epub']", function(el) {
    return Readmill.button(el.href, function(button) {
      button.style.marginTop = "4px";
      return button;
    });
  });
})();
