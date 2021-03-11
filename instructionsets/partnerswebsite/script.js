$(document).ready(function() {
	var blackone = $("#blackone");
	var blacktwo = $("#blacktwo");
	var blackthree = $("#blackthree");
	var whiteone = $("#whiteone");
	var whitetwo = $("#whitetwo");
	var whitethree = $("#whitethree");
	var box = $(".box")


blackone.mousemove(function(event){
  	blackone.css("border-radius", "300px");
  	blackone.css("background", "radial-gradient(circle, rgba(255,114,97,1) 0%, rgba(255,249,0,0.07466736694677867) 100%)"); 
  	blacktwo.classList.add("box");  	
  	console.log('mousemoved');
});

blacktwo.mousemove(function(event){
  	blacktwo.css("border-radius", "300px");
  	blacktwo.css("background", "radial-gradient(circle, rgba(255,200,145,1) 0%, rgba(100,155,223,0.20231213872832365) 78%)");
  	console.log('mousemoved');
});

blackthree.mousemove(function(event){
  	blackthree.css("border-radius", "300px");
  	blackthree.css("background", "radial-gradient(circle, rgba(38,253,29,1) 0%, rgba(255,243,0,0.18497109826589597) 78%) ");
  	console.log('mousemoved');
});

function changecolor() {
	blackone.addclass('boxone');
	blacktwo.addclass('boxtwo');
	blackthree.addclass('boxthree');
}

});