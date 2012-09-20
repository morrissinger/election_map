$(document).ready(function(){
	$(".electionmap area.region").each(function(){
		$.get('?q=election_map/request/'+this.id, function(data){
			$("body").prepend(data).show();
		});

	});
	
	$(".electionmap area.region").bind("mouseover", function(event){
		bottom = event.pageY;
		left = event.pageX;
		$(".popover-"+this.id).css("top", (bottom-($(".popover").height()/2))+"px").css("left", (left+5)+"px").fadeIn("fast").children(".throbber").hide();
	}).bind("mouseout", function(event){
		$(".popover-"+this.id).hide();
	});	
});