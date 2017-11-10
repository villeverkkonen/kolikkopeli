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

// Set lower bet
$(document).ready(function() {
  $('#bet_lower_button').on('click', function() {

		$.ajax({
		  type  : 'POST',
		  data: { "username" : $("#current_player_username").text() },
		  url   : "bet_lower"
		});

	});
});

// Set higher bet
$(document).ready(function() {
  $('#bet_higher_button').on('click', function() {

		$.ajax({
		  type  : 'POST',
		  data: { "username" : $("#current_player_username").text() },
		  url   : "bet_higher"
		});

	});
});

// Send chat message
$(document).ready(function() {
  $('#chat_button').on('click', function() {
    $.ajax({
        type  : 'POST',
        data  : { "message" : $("#message_field").val(),
        		  "username" : $("#current_player_username").text()
        		},
        url   : "chat"
    });
  });
});

// Wishing luck just for fun
$(document).ready(function() {
  console.log("Onnea peliin!");
});