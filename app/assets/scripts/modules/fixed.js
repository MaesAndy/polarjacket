import $ from 'jquery';



 function adjustWidth() {
   var parentwidth = $(".outer-wrapper").width();
   $(".site-header").width(parentwidth);
 }





     $(window).resize(
          function() {
            adjustWidth();
          })


  $( document ).ready(
    function() {
      adjustWidth();
    })
