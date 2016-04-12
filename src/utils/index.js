/**
 * Easy polyfil
 * "Why are you not using JQuery and so on?":
 * 1. https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3lUA4lZGygQLwRPTIjMpv_uBm5XjY0ULwCdsyk4LLG6SN0dW
 * 2. It doesn't make sense to load such heavy library if we are using just several
 *    functionalities.
 */
Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
};

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = this.length - 1; i >= 0; i--) {
    if(this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

// Our utils
window.utils = {};
window.utils.buttons = require('./buttons');
