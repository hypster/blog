// (function() {
//   'use strict';

//   function changeLang() {
//     var lang = this.value;
//     // var canonical = this.dataset.canonical;
//     if (lang) lang += '/';

//     // location.href = '/' + lang + canonical;
//     location.href = '/' + lang;
//   }

//   document.getElementById('lang-select').addEventListener('change', changeLang);
//   // document.getElementById('mobile-lang-select').addEventListener('change', changeLang);
// }());

$(function() {
  $('.spoiler').click(function() {
    $(this).toggleClass('revealed')
  })
  if (window.location.pathname.substr(0, 4) == '/en/') {
    $('.post-content').addClass('en')
  }

  $('.widget.tagcloud a').css({
    color: '#464646'
  })
})