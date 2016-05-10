window.onload=function(){
	
	$("#anniu").click(function(){
	if($("#caidan").css("right")=="-165px"){
	   $("#caidan").css({"right":0})
	   $("#anniu").css({"margin-right":"165px"})
	  
	  }else{//否则
	    $("#caidan").css({"right":"-165px"})
	    $("#anniu").css({"margin-right":0})
	  }
})



$(".ihome").click(function(){
       
	   $(".home").css({"opacity":1,"visibility":"visible"})
	   $(".me,.works,.love,.contact").css({"opacity":0,"visibility":"hidden"})
	   $(".works").css({"z-index":7})
	   $(".ihome").css({"border-bottom":"3px solid #01e1ef","color":"#01e1ef"})
	   $(".ime,.iworks,.ilove,.icontact").css({"border-bottom":"0px solid #01e1ef","color":"#666"})
	   
	   $(".jineng").css({"left":"50%"})
	   $(".gongzjl").css({"left":"50%"})

})




$(".ime").click(function(){
	
       $(".home,.works,.love,.contact").css({"opacity":0,"visibility":"hidden"})
	   $(".me").css({"opacity":1,"visibility":"visible"})
	   $(".works").css({"z-index":7})
	   $(".ime").css({"border-bottom":"3px solid #01e1ef","color":"#01e1ef"})
	   $(".ihome,.iworks,.ilove,.icontact").css({"border-bottom":"0px solid #01e1ef","color":"#666"})
	   
	   $(".jineng").css({"left":"35%"})
	   $(".gongzjl").css({"left":"65%"})

	 
})

$(".iworks").click(function(){
       $(".home,.me,.love,.contact").css({"opacity":0,"visibility":"hidden"})
	   $(".works").css({"opacity":1,"visibility":"visible"})
	   $(".works").css({"z-index":8})
	   $(".iworks").css({"border-bottom":"3px solid #01e1ef","color":"#01e1ef"})
	   $(".ime,.ihome,.ilove,.icontact").css({"border-bottom":"0px solid #01e1ef","color":"#666"})
	   
	   $(".jineng").css({"left":"50%"})
	   $(".gongzjl").css({"left":"50%"})
	 
})

$(".ilove").click(function(){

	    $(".home,.me,.works,.contact").css({"opacity":0,"visibility":"hidden"})
	   $(".love").css({"opacity":1,"visibility":"visible"})
	   $(".works").css({"z-index":7})
	   $(".ilove").css({"border-bottom":"3px solid #01e1ef","color":"#01e1ef"})
	   $(".ime,.iworks,.ihome,.icontact").css({"border-bottom":"0px solid #01e1ef","color":"#666"})
	   
	   $(".jineng").css({"left":"50%"})
	   $(".gongzjl").css({"left":"50%"})
	 
})

$(".icontact").click(function(){

	   $(".home,.me,.works,.love").css({"opacity":0,"visibility":"hidden"})
	   $(".contact").css({"opacity":1,"visibility":"visible"})
	   $(".works").css({"z-index":7})
	   $(".icontact").css({"border-bottom":"3px solid #01e1ef","color":"#01e1ef"})
	   $(".ime,.iworks,.ilove,.ihome").css({"border-bottom":"0px solid #01e1ef","color":"#666"})
	   
	   $(".jineng").css({"left":"50%"})
	   $(".gongzjl").css({"left":"50%"})
	 
	 
})

$(".iture").click(function(){
      
	   $(".tures").css({"top":"0%"})
	   $(".turex").css({"top":"50%"})
	   $(".turez").css({"left":"0%"})
	   $(".turey").css({"left":"50%"})
	   $(".turexuanxiang").css({"box-shadow":"0px 0px 200px #AC0D0D","opacity":1,"z-index":500})
	   
	   $(".jineng").css({"left":"50%"})
	   $(".gongzjl").css({"left":"50%"})
	   
})



$(".xzno").click(function(){
	
	   $(".tures").css({"top":"-50%"})
	   $(".turex").css({"top":"100%"})
	   $(".turez").css({"left":"-50%"})
	   $(".turey").css({"left":"100%"})
	   $(".turexuanxiang").css({"opacity":0,"z-index":0})
	
})



$("header li,.caidan li").mouseover(function(){
		
	   $(this).css({"background":"rgba(178,143,249,.1)","box-shadow":"0 4px 8px #000","transition":"all 500ms"})

})

$("header li,.caidan li").mouseout(function(){
		
	   $(this).css({"background":"none","box-shadow":"none","transition":"all 500ms"})
})




$(".jiaohutu").click(function(){
	
	   $(".wfk").css({"opacity":0,"visibility":"hidden"})
	   $(".worksneir").css({"opacity":1,"visibility":"visible"})
	   $(".jiaohunanme").text("交互")
	   $(".timu").text("Interactive")
})


$(".uitu").click(function(){
	
	   $(".wfk").css({"opacity":0,"visibility":"hidden"})
	   $(".worksneir").css({"opacity":1,"visibility":"visible"})
	   $(".jiaohunanme").text("UI")
	   $(".timu").text("User Interface")
})


$(".pingmian").click(function(){
	
	   $(".wfk").css({"opacity":0,"visibility":"hidden"})
	   $(".worksneir").css({"opacity":1,"visibility":"visible"})
	   $(".jiaohunanme").text("平面设计")
	   $(".timu").text("Graphic design")
})


$(".back").click(function(){
	
	   $(".wfk").css({"opacity":1,"visibility":"visible"})
	   $(".worksneir").css({"opacity":0,"visibility":"hidden"})
	   
})


$(".zpbox").mouseover(function(){
		
	   $(this).find(".fd").css({"opacity":1,"background-position":"center center"})
       
})

$(".zpbox").mouseout(function(){
		
	   $(this).find(".fd").css({"opacity":0,"background-position":"center 100%"})

})


$("#tu1").click(function(){
		
	   $(".datu").css({"opacity":1,"visibility":"visible"})
	   $("#gaitu").attr({"src":"images/11.jpg"})
       
})

$("#tu2").click(function(){
		
	   $(".datu").css({"opacity":1,"visibility":"visible"})
	   $("#gaitu").attr({"src":"images/12.jpg"})
       
})

$("#tu3").click(function(){
		
	   $(".datu").css({"opacity":1,"visibility":"visible"})
	   $("#gaitu").attr({"src":"images/111.jpg"})
       
})

$("#tu4").click(function(){
		
	   $(".datu").css({"opacity":1,"visibility":"visible"})
	   $("#gaitu").attr({"src":"images/110.jpg"})
       
})

$("#tu5").click(function(){
		
	   $(".datu").css({"opacity":1,"visibility":"visible"})
	   $("#gaitu").attr({"src":"images/119.jpg"})
       
})

$("#tu6").click(function(){
		
	   $(".datu").css({"opacity":1,"visibility":"visible"})
	   $("#gaitu").attr({"src":"images/18.jpg"})
       
})

$("#tu7").click(function(){
		
	   $(".datu").css({"opacity":1,"visibility":"visible"})
	   $("#gaitu").attr({"src":"images/19.jpg"})
       
})


$(".datu").click(function(){
		
	   $(".datu").css({"opacity":0,"visibility":"hidden"})
       
})







$(".jineng").mouseover(function(){
		
	   $(".jineng").css({"font-size":"18px","color":"rgba(102,255,255,1)"})
	   $(".jinengkuai").css({"opacity":1,"visibility":"visible"})
	   $(".zwjs,.gongkuai").css({"opacity":0,"visibility":"hidden"})
       
})

$(".jineng").mouseout(function(){
		
	   $(".jineng").css({"font-size":"14px","color":"#FFF"})
	   $(".zwjs").css({"opacity":1,"visibility":"visible"})
	   $(".jinengkuai,.gongkuai").css({"opacity":0,"visibility":"hidden"})

})


$(".gongzjl").mouseover(function(){
		
	   $(".gongzjl").css({"font-size":"18px","color":"rgba(102,255,255,1)"})
	   $(".gongkuai").css({"opacity":1,"visibility":"visible"})
	   $(".zwjs,.jinengkuai").css({"opacity":0,"visibility":"hidden"})
       
})

$(".gongzjl").mouseout(function(){
		
	   $(".gongzjl").css({"font-size":"14px","color":"#FFF"})
	    $(".zwjs").css({"opacity":1,"visibility":"visible"})
	   $(".jinengkuai,.gongkuai").css({"opacity":0,"visibility":"hidden"})

})






}