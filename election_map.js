$(document).ready(function(){
	$("body").prepend("<div class=\"popover right\"><div class=\"throbber\">Loading data...</div></div>").show();
	$(".electionmap area.region").bind("mouseover", function(event){
		bottom = event.pageY;
		left = event.pageX;
		$(".popover").fadeIn("fast");
		$.get('?q=election_map/request/'+this.id, function(data){
			$(".popover").empty().prepend(data).css("top", (bottom-($(".popover").height()/2))+"px").css("left", (left+5)+"px");
		});
	}).bind("mouseout", function(event){
		$(".popover").empty().prepend("<div class=\"throbber\">Loading data...</div>").hide();
	});	
});