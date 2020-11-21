$(document).ready(function(){
  $('#menuBar').click(function(){
    $('#navigation').slideToggle(500);
  });


  $('#top, #navigation a').click(function(){

    var userLocation = window.location.href;
    var currentUrl = userLocation.substring(userLocation.lastIndexOf('#')+1);

  if(currentUrl == 'home'){
    $('html, body').animate({
      scrollTop: $('#scroll-' + currentUrl).offset().top
    },1000);
  }else if(currentUrl == 'homepage'){
    $('html, body').animate({
      scrollTop: $('#scroll-' + currentUrl).offset().top
    },1000);
  }else if(currentUrl == 'aboutUs'){
    $('html, body').animate({
      scrollTop: $('#scroll-' + currentUrl).offset().top
    },1000);
  }
  })
  

    

  
});


