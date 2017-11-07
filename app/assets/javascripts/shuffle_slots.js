// Main function for playing a round
function shuffle_slots() {

	// After every round, reduce money amount
	lower_game_money_amount();

	// Empty slot fields
	empty_fields();
	empty_possible_jackpot_colors();

	// Append slot fields
	append_slots();

	// shuffle_action(slots);

	// Game over if all money is gone
	check_if_game_over();
}

function shuffle_action(slots) {

	$("#upper_slots_row").empty();
	$("#middle_slots_row").empty();
	$("#bottom_slots_row").empty();
	$("#winner").empty();

	var upper_slots = generate_slots();

	var middle_slots = generate_slots();

	var bottom_slots = generate_slots();

	$("#upper_slots_row").append(upper_slots);
	$("#middle_slots_row").append(middle_slots);
	$("#bottom_slots_row").append(bottom_slots);

	empty_fields();
}

// Shuffle slots for upper, middle and bottom rows
function generate_slots() {

	var slots = [
		"A", "A", "A", "A",
		"B", "B", "B",
		"C", "C"
	];

	shuffle(slots);

	var generated_slots = 
	[
		slots[Math.floor(Math.random() * 9)],
		slots[Math.floor(Math.random() * 9)],
		slots[Math.floor(Math.random() * 9)]
	];

	return generated_slots;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

// Empty slot fields
function empty_fields() {
	$("#upper_slots_row").empty();
	$("#middle_slots_row").empty();
	$("#bottom_slots_row").empty();
	$("#winner").empty();
}

// Append slot fields
function append_slots() {

	var upper_slots = generate_slots();	

	var middle_slots = generate_slots();

	var bottom_slots = generate_slots();

	$("#upper_slots_row").append(
			upper_slots[0] + " ",
			upper_slots[1] + " ",
			upper_slots[2] + " "
		);
	$("#middle_slots_row").append(
			middle_slots[0] + " ",
			middle_slots[1] + " ",
			middle_slots[2] + " "
		);
	$("#bottom_slots_row").append(
			bottom_slots[0] + " ",
			bottom_slots[1] + " ",
			bottom_slots[2] + " "
		);

	check_winning_price(upper_slots, middle_slots, bottom_slots);
}

function empty_possible_jackpot_colors() {
	$(".slots").css("background-color", "#DCDCDC");
}

// Game over if all money is gone
function check_if_game_over() {

	var game_money_amount = parseInt($("#game_money_amount").text());

	if (game_money_amount == 0) {
		$(".game_options").css("display", "none");
		$(".end_game").css("display", "none");
		$(".game_over").css("display", "block");
		$("#end_game_score").text("0");
		end_game();
	}
}

$(document).ready(function() {
  console.log("Onnea peliin!");
});