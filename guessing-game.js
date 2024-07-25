function guessingGame() {
	const randomNumber = Math.floor(Math.random() * 100);
	let guesses = 0;
	let gameOver = false;

	return function guess(num) {
		if (gameOver) return "The game is over, you already won!";
		guesses++;
		if (num === randomNumber) {
			gameOver = true;
			return `You win! You found ${num} in ${guesses} guesses.`;
		} else if (num < randomNumber) {
			return `${num} is too low!`;
		} else {
			return `${num} is too high!`;
		}
	};
}

module.exports = guessingGame;
