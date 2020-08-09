window.onload = function () {
	console.log('Hola mundo');

	document.querySelector('.card').classList.add(generatorSuit());
	document.querySelector('.number').innerHTML = generatorNumber();
	  
  };

  let generatorNumber = () => {
	  
	  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

	  let indexNumbers = Math.floor(Math.random() * numbers.length);

	  return numbers[indexNumbers];

  }

  let generatorSuit = () => {
	  
	let suit = ["diamond", "spade", "heart", "club"];

	let indexSuits = Math.floor(Math.random() * suit.length);
	return suit[indexSuits];
}