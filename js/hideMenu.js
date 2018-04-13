var zero = 0;
$(document).ready(function(){
    $(window).on('scroll', function(){
      $('.navbar').toggleClass('.hide', $(window).scrollTop() > zero);
      zer0 = $(window).scrollTop();
    })
})
