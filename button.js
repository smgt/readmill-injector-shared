var Readmill = {

  button: function(url, callback, displayClass) {
    var params = [], src, iframe;

    if(displayClass === undefined) {
      displayClass = "small";
    }

    var container = document.createElement("div");
    container.classList.add("send-to-readmill-wrapper");

    if(callback) {
      container = callback(container);
    }

    params.push('display=' + displayClass);
    params.push('origin_domain=' + encodeURIComponent(window.location.protocol+"//"+document.domain));
    params.push('download_url=' + encodeURIComponent(url));
    params.push('alt=a');

    src = 'https://widgets.readmill.com/send';
    src += '?' + params.join('&');

    iframe = document.createElement('iframe');
    Readmill.styleIFrame(iframe, displayClass);
    iframe.src = src;
    container.appendChild(iframe);
    return container;
  },

  appendChild: function(targets, button, insertAt) {
    if(targets instanceof Array) {
      var elements = targets;
    } else {
      var elements = document.querySelectorAll(targets);
    }
    Array.prototype.forEach.call(elements, function(el) {
      if(!el.classList.contains("readmill-inject")) {
        el.parentNode.appendChild(button(el));
        el.classList.add("readmill-inject");
      }
    });
  },

  styleIFrame: function(iframe, displayClass) {
    var style = 'margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; position: static; left: 0px; top: 0px;',
        placeHolderUrl;
    switch(displayClass) {
      case 'small':
        style += 'width: 72px !important; height: 26px !important; ';
        placeHolderUrl = '//d3kdyw6hgzoh5r.cloudfront.net/assets/widgets/btn_str_small-05a10061a2250cba9d18f9e22ec5e87a.png';
        break;
      case 'large':
        style += 'width: 170px !important; height: 40px !important;';
        placeHolderUrl = '//d3kdyw6hgzoh5r.cloudfront.net/assets/widgets/btn_str_large-48f37b15588d9797c5e10d12680ebac3.png';
        break;
    }

    iframe.style.cssText = "background: transparent url(" + placeHolderUrl + ") !important; " + style;

    // Move into a function for better minimization
    function _applyAttribute(attrName, value) {
      iframe.setAttribute(attrName, value);
    }

    // NOTE Be careful about capitalization here. Internet explorer
    // does not care about attributes unless they are camel cased
    _applyAttribute('allowTransparency', 'true');  // Let transparency shine through
    _applyAttribute('frameBorder', '0');           // Hide ugly iframe border
    _applyAttribute('tabIndex', '0');              // Disable tabbing to the iframe
    _applyAttribute('scrolling', 'no');            // Disable scrolling overflowing content

    if(iframe.className) {
      iframe.className = 'send-to-readmill ' + displayClass;
    } else {
      iframe.setAttribute('class', 'send-to-readmill ' + displayClass);
    }
  }
}
