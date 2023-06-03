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
/*
computerMove = Math.floor(Math.random() * 3 + 1);
if (computerMove== 1){
  computerMove = "kamień"}
if (computerMove== 2){
  computerMove = "papier"}
if (computerMove== 3){
  computerMove = "nożyce"
} 
*/


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
if(playerInput == '2'){
    playerMove = 'papier';
  }
  if(playerInput == '3'){
    playerMove = 'nożyce';
  } */
  // console.log("komputer wybrał: " + computerMove)

printMessage('Twój ruch to: ' + playerMove);
printMessage("Komputer wybrał: " + computerMove);
displayResult(computerMove,playerMove)
/*
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }
else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz!');
  }
else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrywasz!');
  }
else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Wygrywasz');
  }
else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis');
  }
else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
  }
else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz');
  }
else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Wygrywasz');
  }
else {printMessage('Niedozwolony ruch')

} */