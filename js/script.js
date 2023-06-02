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