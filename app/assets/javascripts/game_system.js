// Function for playing 1 round
function shuffle_slots() {
	$.ajax({
        type  : 'POST',
        data  : { "username" : $("#current_player_username").text() },
        url   : "shuffle_slots"
    });
}

// Set lower bet
function bet_lower() {
	$.ajax({
	  type  : 'POST',
	  data: { "username" : $("#current_player_username").text() },
	  url   : "bet_lower"
	});
}

// Set higher bet
function bet_higher() {
	$.ajax({
	  type  : 'POST',
	  data: { "username" : $("#current_player_username").text() },
	  url   : "bet_higher"	});

}

// Send chat message
function send_chat() {
    $.ajax({
        type  : 'POST',
        data  : { "message" : $("#message_field").val(),
        		  "username" : $("#current_player_username").text()
        		},
        url   : "chat"
    });
}

// Refresh chat messages
function refresh_chat() {
    $.ajax({
        type  : 'POST',
        data  : { "username" : $("#current_player_username").text() },
        url   : "refresh_chat"
    });
}

// Wishing luck just for fun
$(document).ready(function() {
  console.log("Onnea peliin!");
});