'use strict'

$(document).ready(function(){
  $('#clicker').click(function(event){
    event.preventDefault();
    $('body').fadeToggle(2500, redirect);
  });
  function redirect() {
    $(location).attr('href', 'main.html');
  }
});
$('#gallery a').click(function(){
  event.preventDefault();
  window.open($(this).attr('href'));
});
