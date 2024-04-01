const score = {
  wins: 0,
  losses: 0,
  ties: 0
  };



function playGame(playerMove) {
    const computerMove =  pickComputerMove();

     
      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') { 
          result = 'You Lose'
          } else if (computerMove === 'paper') {
          result = 'You Win'
          } else if (computerMove === 'scissors') {
          result = 'Tie'
        }

      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') { 
          result = 'You Win'
          } else if (computerMove === 'paper') {
          result = 'Tie'
          } else if (computerMove === 'scissors') {
          result = 'You Lose'
        }

      } else if (playerMove === 'rock') {
        if (computerMove === 'rock') { 
          result = 'Tie'
          } else if (computerMove === 'paper') {
          result = 'You Lose'
          } else if (computerMove === 'scissors') {
          result = 'You Win'
        }
      }
      
      if (result === 'You Win') {
        score.wins += 1;
      } else if (result === 'You Lose') {
        score.losses += 1;
      } else if (result === 'Tie') {
        score.ties += 1;
      }




    alert(`You picked ${playerMove}. Computer picked ${computerMove}.  ${result}.
Wins: ${score.wins}, Losses ${score.losses}, Ties: ${score.ties} ` );

  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) 
    {
    computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) 
    { 
    computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) { 
    computerMove = 'scissors';
    }

    return computerMove;
  }
