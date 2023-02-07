import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import getRandomNumber from '../util.js';

const gcd = (a, b) => {
	const max = a > b ? a : b;
	const min = a < b ? a : b;
	if (max % min === 0) {
		return min;
	}
	return gcd(min, max % min);
};

export default () => {
	const games = () => {
		const name = greetings();
		console.log('Find the greatest common divisor of given numbers.');
		for (let i = 1; i <= 3; i += 1) {
			const firstOperand = getRandomNumber(1, 100);
			const secondOperand = getRandomNumber(1, 100);
			const result = gcd(firstOperand, secondOperand);
			console.log(`Question: ${firstOperand} ${secondOperand}`);
			const answer = readlineSync.question('Your answer: ');
			if (result === Number(answer)) {
				console.log('Correct!');
			} else {
				console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd(firstOperand, secondOperand)}'.`);
				console.log(`Let's try again, ${name}!`);
				return;
			}
		};
		console.log(`Congratulations, ${name}!`);
		return;
	};
	games(gcd, getRandomNumber);
};

