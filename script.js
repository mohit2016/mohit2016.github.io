
$(document).ready(function(){
    

 
//     $(".fa-bars").click(function(){
          
//         $(".left").css("display","block");
//         $("#menu").removeClass("fa-bars");
//         $("#menu").addClass("fa-times");
// });
 
//           $(".fa-times").click(function(){
          
//         $(".left").css("display","none");
//         $("#menu").removeClass("fa-times");
//         $("#menu").addClass("fa-bars");
        
   
    
//     });
    
   

$('#menu').click(function(e) {
  e.stopPropagation();
  $(".left").toggleClass('bar')
});

$('body').click(function(e) {
  if ($('.left').hasClass('bar')) {
    $(".left").toggleClass('bar')
  }
});

});