(function() {
  Readmill.appendChild("a[type='application/epub+zip'],a[href$='epub'],a[href$='pdf'],a[href$='acsm']", function(el) {
    return Readmill.button(el.href, function(button) {
        return button;
    });
  });
})();
