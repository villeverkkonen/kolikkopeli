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