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

function animate_shuffle(upper_slots, middle_slots, bottom_slots) {
    $("#upper_slots_row").text(bottom_slots);
    $("#middle_slots_row").text(upper_slots);
    $("#bottom_slots_row").text(middle_slots);
    setTimeout(function() {
      $("#upper_slots_row").text(middle_slots);
      $("#middle_slots_row").text(bottom_slots);
      $("#bottom_slots_row").text(upper_slots);
    }, 150);
    setTimeout(function() {
      $("#upper_slots_row").text(middle_slots);
      $("#middle_slots_row").text(upper_slots);
      $("#bottom_slots_row").text(bottom_slots);
    }, 150);
    setTimeout(function() {
      $("#upper_slots_row").text(bottom_slots);
      $("#middle_slots_row").text(middle_slots);
      $("#bottom_slots_row").text(upper_slots);
    }, 150);
    setTimeout(function() {
      $("#upper_slots_row").text(upper_slots);
      $("#middle_slots_row").text(middle_slots);
      $("#bottom_slots_row").text(bottom_slots);
    }, 150);
    setTimeout(function() {
      $("#upper_slots_row").text(upper_slots);
      $("#middle_slots_row").text(middle_slots);
      $("#bottom_slots_row").text(bottom_slots);
    }, 150);
}

// Wishing luck just for fun
$(document).ready(function() {
  console.log("Onnea peliin!");
});