(function() {

  var anchorTags = document.getElementsByTagName("a");
  var buttons = [];

  Array.prototype.forEach.call(anchorTags, function(el) {
    if(el.pathname.match(/\.(epub|pdf|acsm)$/) !== null) {
      buttons.push(el);
    }
  });

  Readmill.appendChild(buttons, function(el) {
    return Readmill.button(el.href, function(button) {
      return button;
    });
  });

})();
