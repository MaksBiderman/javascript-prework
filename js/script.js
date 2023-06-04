function playGame(playerInput){
  clearMessages();
  let playerMove = getMoveName(playerInput);
  
  function printMessage(message) {
    console.log(message);
  }
  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    else if(argMoveId == 2){
      return 'papier';
    }
    else if(argMoveId == 3){
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
  function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    if(argComputerMove == argPlayerMove){
      printMessage('Tym razem remis')
    }
    else if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('wygrywasz! :)')
    }
    else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Przegrywasz! :(')
    } 
    else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Przegrywasz! :(')
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('wygrywasz! :)')
    } 
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Przegrywasz! :(')
    }
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('wygrywasz! :)')
    }
    else {
      printMessage('Niedozwolony ruch!!')
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
 
  printMessage('Twój ruch to: ' + playerMove);
  printMessage("Komputer wybrał: " + computerMove);
  displayResult(computerMove,playerMove)
  
}
document.getElementById('rock').addEventListener('click', function(){
  playGame(1)
});
document.getElementById('paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('scissors').addEventListener('click', function(){
  playGame(3)
});