// Ajax-form for starting game
$(document).ready(function() {
  $('#start_game_button').on('click', function() {
    
    // Username can't contain special characters nor be null
    if (/^[a-zA-Z0-9]+(?:[\w -]*[a-zA-Z0-9]+)*$/.test($("#username").val()) &&
      $("#username").val() != "" &&
      $("#username").val() != null) {

      $.ajax({
        type  : 'POST',
        data: { "username" : $("#username").val() },
        url   : $("#start_game_form").data("url")
    });

	} else {
      alert("Keksi erikoismerkitön nimimerkki!");
      $("#username").focus();
	}
  });
});

// end_game() is activated when money is out or clicked "Lopeta peli"
$(document).ready(function() {
  $('#end_game_button').on('click', function() {
    end_game();
  });
});

// Ajax-form for ending game
function end_game() {
  $.ajax({
      type  : 'POST',
      data  : { "username" : $("#current_player_username").text(),
                "game_money" : $("#game_money_amount").text()
              },
      url   : $("#end_game_form").data('url')
  });
};

// Ajax-form for going back to start game -view
$(document).ready(function() {
  $('#new_game_button').on('click', function() {
    $.ajax({
        type  : 'POST',
        url   : $("#new_game_form").data('url')
    });
  });
});