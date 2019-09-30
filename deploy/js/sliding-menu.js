var MS = {};
MS.App = (function() {
  var ESCAPE_CODE = 27;
  var navButton = $('#menu-button-mobile'),
      navMenu = $('#side-nav');
  var navLinks = navMenu.find('a');

  function initApp() {
    navMenu.on('keydown', handleKeydown);
    navButton.on('click', handleClick);
    disableNavLinks();
  }
  function handleKeydown(event) {
    if (event.keyCode === ESCAPE_CODE) {
      document.body.classList.toggle('active');
      disableNavLinks();
      navButton.focus();
    }
  }
  function handleClick(event) {
    if (document.body.classList.contains('active')) {
      document.body.classList.remove('active');
      disableNavLinks();
    }
    else {
      document.body.classList.add('active');
      enableNavLinks();
      navLinks.eq(0).focus();
    }
  }
  function enableNavLinks() {
    navButton.attr('aria-label', 'Menu expanded');
    navMenu.removeAttr('aria-hidden');
    navLinks.removeAttr('tabIndex');
  }
  function disableNavLinks() {
    navButton.attr('aria-label', 'Menu collapsed');
    navMenu.attr('aria-hidden', 'true');
    navLinks.attr('tabIndex', '-1');
  }
  return {
    init: function(){
      initApp();
    }
  }
})();

$(document).ready(function($) {
  new MS.App.init();
});