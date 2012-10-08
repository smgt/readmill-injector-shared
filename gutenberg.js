(function() {
  Readmill.appendChild("a[type='application/epub+zip']", function(el) {
    return Readmill.button(el.href, function(button) {
        button.style.verticalAlign = "middle";
        button.style.marginLeft = "20px";
        button.style.display = "inline-block";
        return button;
    });
  });
})();
