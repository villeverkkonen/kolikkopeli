// After every round, reduce money amount
function lower_game_money_amount() {
	var game_money_amount = parseInt($("#game_money_amount").text());
	var bet = parseInt($("#game_bet_amount").text());
	
	if (game_money_amount > 0) {
		game_money_amount -= bet;
	}

	$("#game_money_amount").text(game_money_amount);
}

// Check if player won and how much
function check_winning_price(upper_slots, middle_slots, bottom_slots) {

	if (
		upper_slots[0] == "A" &&
		upper_slots[1] == "A" &&
		upper_slots[2] == "A" &&

		middle_slots[0] == "A" &&
		middle_slots[1] == "A" &&
		middle_slots[2] == "A" &&

		bottom_slots[0] == "A" &&
		bottom_slots[1] == "A" &&
		bottom_slots[2] == "A") {

		add_price_to_game_money(150);
		color_jackpot_lines();

	} else if (
		upper_slots[0] == "B" &&
		upper_slots[1] == "B" &&
		upper_slots[2] == "B" &&

		middle_slots[0] == "B" &&
		middle_slots[1] == "B" &&
		middle_slots[2] == "B" &&

		bottom_slots[0] == "B" &&
		bottom_slots[1] == "B" &&
		bottom_slots[2] == "B") {

		add_price_to_game_money(350);
		color_jackpot_lines();

	} else if (
		upper_slots[0] == "C" &&
		upper_slots[1] == "C" &&
		upper_slots[2] == "C" &&

		middle_slots[0] == "C" &&
		middle_slots[1] == "C" &&
		middle_slots[2] == "C" &&

		bottom_slots[0] == "C" &&
		bottom_slots[1] == "C" &&
		bottom_slots[2] == "C") {

		add_price_to_game_money(500);
		color_jackpot_lines();

	} else if (
		middle_slots[0] == "A" &&
		middle_slots[1] == "A" &&
		middle_slots[2] == "A") {

		add_price_to_game_money(8);

	} else if (
		middle_slots[0] == "B" &&
		middle_slots[1] == "B" &&
		middle_slots[2] == "B") {

		add_price_to_game_money(15);

	} else if (
		middle_slots[0] == "C" &&
		middle_slots[1] == "C" &&
		middle_slots[2] == "C") {

		add_price_to_game_money(20);

	} else if (
		middle_slots[0] == "A" &&
		middle_slots[1] == "B" &&
		middle_slots[2] == "C") {

		add_price_to_game_money(10);

	} else {
		$("#winner").append("<br>");
		check_if_bet_allowed();
	}
}

// If player won, add amount to game money
function add_price_to_game_money(amount) {

	var game_money_amount = parseInt($("#game_money_amount").text());
	var bet = parseInt($("#game_bet_amount").text());

	if (bet == 1) {
		amount += amount * 0;

	} else if (bet == 2) {
		amount += amount * 0.2;

	} else if (bet == 3) {
		amount += amount * 0.45;

	} else if (bet == 4) {
		amount += amount * 0.7;

	} else if (bet == 5) {
		amount += amount * 1;
	}

	amount = Math.round(amount);

	game_money_amount += amount;

	$("#winner").append("Voitto: " + amount);
	$("#game_money_amount").text(game_money_amount);
}

function color_jackpot_lines() {
	$(".slots").css("background-color", "#FF00FF");
}