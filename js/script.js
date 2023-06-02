let computerMove = Math.floor(Math.random() * 3 + 1);

if (computerMove== 1)printMessage("Komputer wybrał kamień")
if (computerMove== 2)printMessage("Komputer wybrał papier")
if (computerMove== 3)printMessage("Komputer wybrał nożyce");

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

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

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }
if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz!');
  }
if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrywasz!');
  }
if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Wygrywasz');
  }
if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis');
  }
if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
  }
if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz');
  }
if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Wygrywasz');
  }
else {printMessage('Niedozwolony ruch')

}