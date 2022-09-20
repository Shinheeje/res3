$('.trigger').click(function(){
  $(this).toggleClass('on');
  $('nav').fadeToggle(600);
});

$(window).resize(function(){
  let winW = $(window).width(); // 브라우저의 가로길이
  console.log('브라우저의 가로길이는?', winW);
  if(winW >= 768 && $('nav').is(':hidden')){
    $('nav').removeAttr('style');
  }
});