


	var turn = 0; // player 
	
	$(".p").text("Let's play the game !");
	
	$(".cell").one("click",function () {
		// for each click append x or o . 
			if ((turn % 2) == 0) { 
				
				$(this).append("X");
	           
				$(this).css('color', "palevioletred");
				$(".p").html("<span class='p'> Player O's turn! </span>");
			
		
				}

				
		 else {
				$(this).append("O");
				$(this).css('color', "palevioletred");
				$(".p").html("<span class='p'> Player X's turn! </span>");

			}
			turn++;
			 // check the winner 
	
			if (checkWinner() != false ) {
				if (checkWinner() == "X") {
					$(".p").text(" Player X Wins !");
					 $(".cell").off("click"); 
				} else if (checkWinner() == "O") {
					
					
					$(".p").text(" Player O Wins !"); 
					$(".cell").off("click"); 
					
					
				}
				
			}
			else if (turn ==9) {
				$(".p").text(" No one wins the game !"); 
			 }
		
	});

	let checkWinner = function () {
		
		var cell1 = $("#c1").text();
        var cell2 = $("#c2").text();
        var cell3 = $("#c3").text();
        var cell4 = $("#c4").text();
        var cell5 = $("#c5").text();
        var cell6 = $("#c6").text();
        var cell7 = $("#c7").text();
        var cell8 = $("#c8").text();
        var cell9 = $("#c9").text();

	


		// check rows
		if ((cell1 == cell2) && (cell2 == cell3)) {
			return cell3;
		} else if ((cell4 == cell5) && (cell5 == cell6)) {
			return cell6;
		} else if ((cell7 == cell8) && (cell8 == cell9)) {
			return cell9;
		}
		// check columns
		else if ((cell1 == cell4) && (cell4 == cell7)) {
			return cell7;
		} else if ((cell2 == cell5) && (cell5 == cell8)) {
			return cell8;
		} else if ((cell3 == cell6) && (cell6 == cell9)) {
			return cell9;
		}
		// check diagonals
		else if ((cell1 == cell5) && (cell5 == cell9)) {
			return cell9;
		} else if ((cell3 == cell5) && (cell5 == cell7)) {
			return cell7;
		}
		else  {
			return false;
		 }
	}





