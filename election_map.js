$(document).ready(function(){
	
	$(".electionmap area.region").bind("mouseover", function(event){
		$.get('?q=election_map/request/'+JSON.stringify(this.id), function(data){
			$("body").prepend(data).children(".popover").show().children(".throbber").hide();
		});
	}).bind("mouseout", function(event){
		$(".popover").remove();
	});	
	$(".electionmap area.region").mousemove(function(event){
		bottom = event.pageY;
		left = event.pageX;
		$(".popover-"+this.id).css("top", (bottom-($(".popover-"+this.id).height()/2))+"px").css("left", (left+5)+"px");
	});
});