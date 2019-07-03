
let gameOver = false;
let player = "X";
if (Math.random() < 0.5) {
    player = 'O';
}
// check x or o ==> turn to ooposite  << this can be seperate function 
const turn = function () {

    if (player == "X") {
        player = "O";
    } else {
        player = "X";
    }
}


const cels = document.querySelectorAll('td');
const msg = document.querySelector('#message');

for (let i = 0; i < cels.length; i++) {
    cels[i].addEventListener('click', function () {
        if (gameOver == false){
        const symbol = document.createElement('p');
        symbol.innerHTML = player;


        if (symbol.innerHTML == 'X') {
            symbol.innerHTML = 'O';
            msg.innerHTML = 'It is player with symbol - ' + symbol.innerHTML + ' - turn ';
        } else {
            symbol.innerHTML = 'X';
            msg.innerHTML = 'It is player with symbol - ' + symbol.innerHTML + ' - turn ';
        }


        const cell = document.querySelectorAll('td');
        cell[i].appendChild(symbol);

        this.removeEventListener('click', arguments.callee);
        turn()



        const checkWinner = function () {

            
          for (let i = 0;i < 9; i+=3){
                    if (cels[i].innerText == cels[i+2].innerText && cels[i+1].innerText == cels[i].innerText && cels[i].innerText !== '') {
                          gameOver = true;
                       return  msg.innerHTML = 'The player with symbol ' + cels[0].innerText + ' won ';
                    }}
                    /*if (cels[3].innerText == cels[4].innerText && cels[3].innerText == cels[5].innerText && cels[3].innerText !== '') {
                        gameOver = true;
                     return  msg.innerHTML = 'The player with symbol ' + cels[3].innerText + ' won ';
                    }
                    if (cels[6].innerText == cels[7].innerText && cels[6].innerText == cels[8].innerText && cels[6].innerText !== '') {
                    gameOver = true;
                     return  msg.innerHTML = 'The player with symbol ' + cels[6].innerText + ' won ';
                    }*/
          for (let i = 0;i < 3; i++){         
                    if (cels[i].innerText == cels[i+3].innerText && cels[i].innerText == cels[i+6].innerText && cels[i].innerText !== '') {
                        gameOver = true;
                         return  msg.innerHTML = 'The player with symbol ' + cels[i].innerText + ' won ';
                    }}/*
                    if (cels[1].innerText == cels[7].innerText && cels[1].innerText == cels[4].innerText && cels[1].innerText !== '') {
                        gameOver = true;
                         return  msg.innerHTML = 'The player with symbol ' + cels[1].innerText + ' won ';
                    }
                    if (cels[2].innerText == cels[5].innerText && cels[2].innerText == cels[8].innerText && cels[2].innerText !== '') {
                        gameOver = true;
                         return  msg.innerHTML = 'The player with symbol ' + cels[2].innerText + ' won ';
                    }*/
                   
                    if (cels[0].innerText == cels[4].innerText && cels[0].innerText == cels[8].innerText && cels[0].innerText !== '') {
                        gameOver = true;
                         return  msg.innerHTML = 'The player with symbol ' + cels[0].innerText + ' won ';
                    }
                    if (cels[2].innerText == cels[4].innerText && cels[2].innerText == cels[6].innerText && cels[2].innerText !== '') {
                        gameOver = true;
                         return  msg.innerHTML = 'The player with symbol ' + cels[2].innerText + ' won ';
                    }
                    let counter =0;
            for (let i = 0; i<9; i++){
                    if (cels[i].innerText != '' ){
                        counter++;
                        if(counter == 9 && gameOver != true){
                            gameOver = true;
                             return msg.innerHTML = 'No player win, Please click RESET';
                        }}
            }
                    
           }         
                    
                    
           
           checkWinner();     
        }
        
    }
    
    )
    
};

















