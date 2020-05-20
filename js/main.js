$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)

 })

})

function Send(){
  var data = document.getElementById("visit").elements;
  var name = data["visit_name"].value;
  var subject = "[Personal Website]" + name ;
  var contant = "Dear Jeff, %0D%0A%0D%0A" + data["visit_contant"].value + "%0D%0A%0D%0A%0D%0ABest Regards, %0D%0A" + name +  "%0D%0A%0D%0A(By Personal Website)";;

  window.open('mailto:longsing_poon@yahoo.com.hk?subject='+subject+'&body='+contant);
}
