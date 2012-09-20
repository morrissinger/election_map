$(document).ready(function(){
	
	$(".electionmap area.region").bind("mouseover", function(event){
		bottom = event.pageY;
		left = event.pageX;
		$(".popover").css("top", (bottom-($(".popover").height()/2))+"px").css("left", (left+5)+"px").fadeIn("fast");
		$.get('?q=election_map/request/'+this.id, function(data){
			$("body").prepend(data).children(".popover").show().css("top", (bottom-($(".popover").height()/2))+"px").css("left", (left+5)+"px").children(".throbber").hide();
		});
	}).bind("mouseout", function(event){
		$(".popover").remove();
	});	
});