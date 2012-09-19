$(document).ready(function(){
	$(".electionmap area.region").bind("mouseover", function(event){
		bottom = event.pageY;
		left = event.pageX;
		$.get('?q=election_map/request/'+$(this).data('tid'), function(data){
			$("body").prepend(data).children(".popover").css("top", (bottom-($(".popover").height()/2))+"px").css("left", (left+5)+"px").fadeIn();
		});
	}).bind("mouseout", function(event){
		$(".popover").detach()
	});	
});