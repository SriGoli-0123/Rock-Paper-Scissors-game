const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0, 0];

for ( let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', playGame);
}

function playGame(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();

    if (computerSelection < .34) {
        computerSelection = 'Rock';
    } 
    else if (computerSelection <= .67) {
        computerSelection = 'Paper';
    } 
    else {
        computerSelection = 'Scissors';
    }
    
    let result = checkWinner(playerSelection, computerSelection);

    if (result === 'Player') {
        result += ' wins!';
        winnerScores[0]++;
    }
    if (result === 'Computer') {
        result += ' wins!';
        winnerScores[1]++;
    }
    if (result === 'Draw') {
        result += '. It\'s a tie!'
    }

    scorer('<h5>Player\'s score: [ ' + winnerScores[0] + ' ] and Computer\'s score: [ ' + winnerScores[1] + ' ]</h5>');
    messenger('<h5>Player took: <strong>' + playerSelection + '</strong> and Computer took: <strong>' + computerSelection + '</strong><br></h5>' + '<h5>' + result + '</h5');
}

function scorer(scoreMessage) { score.innerHTML = scoreMessage; }

function messenger(selectionMessage) { message.innerHTML = selectionMessage; }

function checkWinner(player, computer) {
    if (player === computer) {
        return 'Draw';
    }
    if (player === 'Rock') {
        if (computer === 'Paper') {
            return 'Computer';
        } 
        else {
            return 'Player';
        }
    }
    if (player === 'Paper') {
        if (computer === 'Scissors') {
            return 'Computer';
        } 
        else {
            return 'Player';
        }
    }
    if (player === 'Scissors') {
        if (computer === 'Rock') {
            return 'Computer';
        } 
        else {
            return 'Player';
        }
    }
}
