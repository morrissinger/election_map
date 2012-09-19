$(document).ready(function(){
	$("body").prepend("<div class=\"popover right\"></div>").show();
	$(".electionmap area.region").bind("mouseover", function(event){
		bottom = event.pageY;
		left = event.pageX;
		$.get('?q=election_map/request/'+this.id, function(data){
			$(".popover").prepend(data).css("top", (bottom-($(".popover").height()/2))+"px").css("left", (left+5)+"px").fadeIn("fast");
		});
	}).bind("mouseout", function(event){
		$(".popover").empty().hide()
	});	
});