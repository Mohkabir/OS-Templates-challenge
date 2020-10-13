$(document).ready(function(){
  $('#menuBar').click(function(){
    $('#navigation').slideToggle(1000);
  });

  $('#top').click(function(){
    var userLocation = window.location.href;
  var currentUrl = userLocation.substring(userLocation.lastIndexOf('#')+1);

  if(currentUrl == 'home'){
    $('html, body').animate({
      scrollTop: $('#scroll-' + currentUrl).offset().top
    },1000);
  }
  })
  
});


