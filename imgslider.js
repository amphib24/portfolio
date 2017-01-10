//setting options
var speed = 500; //fade speed
var autoswitch = true;  //auto slide options
var autoswitch_speed = 4000; //auto slider speed

//add initial active class
$('.slide ').first().addClass('active');

// hide all slides
$('.slide').hide();

//show first slide
$('.active').show();

$('#next').click(function(event){
  event.preventDefault();
  console.log('button clicked');
  $('.active').removeClass('active').addClass('oldActive');
  if($('.oldActive').is(':last-child')){
    $('.slide').first().addClass('active');
  }else{
    $('.oldActive').next().addClass('active');
  }
  $('.oldActive').removeClass('.oldActive');
  $('.slide').fadeOut(speed);
  $('.active').fadeIn(speed);
});
