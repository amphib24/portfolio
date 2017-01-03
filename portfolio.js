'use strict'

$(document).ready(function(){
  $('#clicker').click(function(event){
    event.preventDefault();
    $('body').fadeOut(1000, redirect);
  });
  function redirect() {
    $(location).attr('href', 'main.html');
  }
});
