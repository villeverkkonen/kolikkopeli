// Function for playing 1 round
$(document).ready(function() {
	$('#shuffle_slots_button').on('click', function() {
		$.ajax({
	        type  : 'POST',
	        data  : { "username" : $("#current_player_username").text() },
	        url   : "shuffle_slots"
	    });
	});
});