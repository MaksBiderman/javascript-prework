function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	console.clear();
	document.getElementById("messages").innerHTML = "";
  }
  function updateResult() {
	let resultDiv = document.getElementById('result');
	resultDiv.innerHTML = `GRACZ: ${playerWins} - PC: ${computerWins}`;
  }