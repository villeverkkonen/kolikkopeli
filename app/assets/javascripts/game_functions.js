// New game
function new_game() {
  $.ajax({
      type  : 'POST',
      url   : "new_game"
  });
}

// Start game
function start_game() {
    
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
}

// End game
function end_game() {
    $.ajax({
      type  : 'POST',
      data  : { "username" : $("#current_player_username").text() },
      url   : "end_game"
    });
}