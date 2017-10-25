function menuMore(){	
	$(".menu-more-btn").hide();
    $(".pick-up-btn").show();	
}
function pickUp(){
	$(".menu-more-btn").show();
	$(".pick-up-btn").hide();
}

$(function(){
	$(".bttn").each(function(){
    $(this).click(function(){
    	console.log($(this).index());
    $(this).removeClass('bttn').addClass('bttn active');
    $(this).siblings().removeClass('bttn active').addClass('bttn');
    for(var i=0;i<4;i++){
    	if(i===$(this).index()){
    		$(".list"+i).removeClass("displaynone1");
    	}
    	else{
    		$(".list"+i).addClass('displaynone1');
    	}
    }
  });
 });
});

$(document).ready(function(){
	var rating=(function(){
    var init=function(el,num){	
	var $starBars=$(el);
	$starBars.each(function(index){
		$starBar = $(this);
		var $itemstar=$starBar.find('.nostar');
		var lightOn=function(num){
		  $itemstar.each(function(index){
		  if(index<num){
			  $(this).removeClass("nostar").addClass("star");	  		
		  }
		  else{
	    	$(this).removeClass("star").addClass("nostar");
		  }
		})
		};
		lightOn(num);
		$starBar
		.on("click",".nostar",function(){
			num=$(this).index()+1;
			lightOn(num);
	    console.log("click in num " + num);
		}).on("click",".star",function(){
			num=$(this).index()+1;
			lightOn(num);		
		})
		})
   	}
	return {
	init:init	
	};
})();
rating.init('.star-bar',3);
rating.init('.star-bar1',3);
rating.init('.star-bar2',3);
rating.init('.star-bar3',3);
})