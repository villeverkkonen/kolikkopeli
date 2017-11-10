// Start game
$(document).ready(function() {
  $('#start_game_button').on('click', function() {
    
    // Username can't contain special characters nor be null
    if (/^[a-zA-Z0-9]+(?:[\w -]*[a-zA-Z0-9]+)*$/.test($("#username").val()) &&
      $("#username").val() != "" &&
      $("#username").val() != null) {

      $.ajax({
        type  : 'POST',
        data: { "username" : $("#username").val() },
        url   : "start_game"
      });

  	} else {
        alert("Keksi erikoismerkitön nimimerkki!");
        $("#username").focus();
  	}
  });
});

// End game
$(document).ready(function() {
  $('#end_game_button').on('click', function() {
    $.ajax({
      type  : 'POST',
      data  : { "username" : $("#current_player_username").text() },
      url   : "end_game"
  });
  });
});

// New game
$(document).ready(function() {
  $('#new_game_button').on('click', function() {
    $.ajax({
        type  : 'POST',
        url   : "new_game"
    });
  });
});