// Set higher bet
function higher_bet() {

	var game_money_amount = parseInt($("#game_money_amount").text());
	var bet = parseInt($("#game_bet_amount").text());

	if (bet < 5 && bet < game_money_amount) {
		bet++;
		$("#game_bet_amount").text(bet);
		winning_lines_info();
	}
}

// Set lower bet
function lower_bet() {

	var bet = parseInt($("#game_bet_amount").text());

	if (bet > 1) {
		bet--;
		$("#game_bet_amount").text(bet);
		winning_lines_info();
	}
}

// If player doesn't have enough money for placed bet, place maximum possible bet
function check_if_bet_allowed() {

	var game_money_amount = parseInt($("#game_money_amount").text());
	var bet = parseInt($("#game_bet_amount").text());

	if (bet > game_money_amount) {
		$("#game_bet_amount").text(game_money_amount);
	}
}