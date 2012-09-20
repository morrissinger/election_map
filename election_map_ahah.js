$(document).ready(function(){
	num_els = $(".electionmap area.region").length;
	i = 1
	$(".electionmap").prepend("<div class=\"modal\"></div>")
						.children(".modal").prepend("<div class=\"loading\"><h2>Please wait</h2><div class=\"content\"><p>The map is loading data. Once it is loaded, simply hover over a colored county to view SEIU 1021's voting recommendations.</div><div class=\"throbber\">Loading data...</div>").children(".loading").hide().slideDown();

	$(".electionmap area.region").each(function(){
		$.get('?q=election_map/request/'+this.id, function(data){
			$("body").prepend(data).show();
			i++;
			if(i >= num_els)
				{
				$(".modal").fadeOut();
				}
		});

	});
	
	$(".electionmap area.region").bind("mouseover", function(event){
		bottom = event.pageY;
		left = event.pageX;
		$(".popover-"+this.id).css("top", (bottom-($(".popover-"+this.id).height()/2))+"px").css("left", (left+5)+"px").fadeIn("fast").children(".throbber").hide();
	}).bind("mouseout", function(event){
		$(".popover-"+this.id).hide();
	});	
});