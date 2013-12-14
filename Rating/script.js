var toggle=1;
var defaultId;

function setDefault() {
	var n = Math.floor(defaultId);
	var rem = (defaultId-n)*100;
	for (var i = 1; i < 11; i++) {
			var bar = document.getElementById(i);
			bar.className = "all";
		if (i <= n) {
			bar.className += " yellow";
		}	
	}
	if(rem>0){
			var e = $('<div class = "yellow" id = "partial" style="width:'+rem+'%;"></div>');
			bar = document.getElementById(n+1);
			$(bar).append(e);
	}
}

$(document).ready(function(){
	var d = document.getElementById("defaultVal");
	defaultId = parseFloat(d.innerHTML, 10);
	setDefault();
		
    $(".all").hover(function(){
	if(toggle!=0){
		$("#partial").toggleClass("hidden");
		}
		var currentId = $(this).attr('id');
		for (var i = 1; i <= defaultId; i++) {
			if(toggle !=0){
			var temp = i.toString();
			$('#' + temp).toggleClass("yellow");
			}
		}
		for (var i = 1; i < 11; i++) {
			if (i <= currentId && toggle !=0){
			var temp = i.toString();
			$('#' + temp).toggleClass("red");
			}
		}
    });
	$(".all").click(function(){
		var currentId = $(this).attr('id');
		$("#partial").remove();
		for (var i = 1; i < 11; i++) {
			if (i <= currentId && toggle !=0){
			var temp = i.toString();
			$('#' + temp).addClass("red");
			$('#partial').addClass("red");
			$('#' + temp).removeClass("yellow");
			$('#partial').removeClass("yellow");
			$("p").html("Thank You! Your vote has been submitted.");
			}
		}
		var d = document.getElementById("defaultVal");
		defaultId = parseFloat(d.innerHTML, 10);
		setTimeout(function(){setDefault();},2000);
		toggle = 0;
    });
});