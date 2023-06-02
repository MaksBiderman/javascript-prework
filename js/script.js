function printMessage(message) {
  console.log(message);
}


let computerMove = Math.floor(Math.random() * 3 + 1);

if (computerMove== 1){
  computerMove = "kamień"}
if (computerMove== 2){
  computerMove = "papier"}
if (computerMove== 3){
  computerMove = "nożyce"
}


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');


let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
if(playerInput == '2'){
    playerMove = 'papier';
  }
  if(playerInput == '3'){
    playerMove = 'nożyce';
  }
  console.log("komputer wybrał: " + computerMove)

printMessage('Twój ruch to: ' + playerMove);
printMessage("Komputer wybrał: " + computerMove);

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

}