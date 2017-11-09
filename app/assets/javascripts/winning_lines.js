// $(document).ready(function() {
// 	winning_lines_info();
// });

// // Update winning lines -info to match the current bet
// function winning_lines_info() {
// 	var bet = parseInt($("#game_bet_amount").text());

// 	if (bet < 1 || bet > 5) {
// 		return;
// 	} else if (bet == 1) {

// 		var bet_1 = parseFloat($("#bet_1").text());
// 		change_winning_prices_by_bet(bet_1);

// 	} else if (bet == 2) {

// 		var bet_2 = parseFloat($("#bet_2").text());
// 		change_winning_prices_by_bet(bet_2);

// 	} else if (bet == 3) {

// 		var bet_3 = parseFloat($("#bet_3").text());
// 		change_winning_prices_by_bet(bet_3);

// 	} else if (bet == 4) {

// 		var bet_4 = parseFloat($("#bet_4").text());
// 		change_winning_prices_by_bet(bet_4);

// 	} else if (bet == 5) {

// 		var bet_5 = parseFloat($("#bet_5").text());
// 		change_winning_prices_by_bet(bet_5);
// 	}
// }

// function empty_winning_line_info_rows() {
// 	$("#winning_line_AAA").empty();
// 	$("#winning_line_BBB").empty();
// 	$("#winning_line_CCC").empty();
// 	$("#winning_line_ABC").empty();
// 	$("#winning_line_9A").empty();
// 	$("#winning_line_9B").empty();
// 	$("#winning_line_9C").empty();
// }

// function change_winning_prices_by_bet(bet_multiple) {

// 	var AAA = parseInt($("#AAA").text());
// 	var BBB = parseInt($("#BBB").text());
// 	var CCC = parseInt($("#CCC").text());
// 	var ABC = parseInt($("#ABC").text());
// 	var A9 = parseInt($("#A9").text());
// 	var B9 = parseInt($("#B9").text());
// 	var C9 = parseInt($("#C9").text());
	
// 	$("#winning_line_AAA").text(Math.round(AAA + AAA * bet_multiple));
// 	$("#winning_line_BBB").text(Math.round(BBB + BBB * bet_multiple));
// 	$("#winning_line_CCC").text(Math.round(CCC + CCC * bet_multiple));
// 	$("#winning_line_ABC").text(Math.round(ABC + ABC * bet_multiple));
// 	$("#winning_line_9A").text(Math.round(A9 + A9 * bet_multiple));
// 	$("#winning_line_9B").text(Math.round(B9 + B9 * bet_multiple));
// 	$("#winning_line_9C").text(Math.round(C9 + C9 * bet_multiple));
// }