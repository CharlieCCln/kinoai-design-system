$(document).ready(function(){

  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "fill"
  });

  $("#tabs").tabs();

  $("#frame").selectmenu();
  $("#ratio").selectmenu();

  $('.toggle').on('click',function(){
    $(this).toggleClass('on');
  })

  $('.tracklet').on('click', function(){
    $('.tracklet .border').toggleClass('greenborder');
    $('.tracklet span').toggleClass('greenname');
  })

})
