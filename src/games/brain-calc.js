import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import getRandomNumber from '../util.js';

const getCalc = (num1, num2, sign) => {
	switch (sign) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
	}
};

export default () => {
	const games = (getCalc, getRandomNumber) => {
		const name = greetings();
		const signsArray = ['+', '-', '*'];
		console.log('What is the result of the expression?');
		for (let i = 1; i <= 3; i += 1) {
			const firstOperand = getRandomNumber(1, 100);
			const secondOperand = getRandomNumber(1, 100);
			const signIndex = getRandomNumber(0, signsArray.length - 1);
			const sign = signsArray[signIndex];
			console.log(`Question: ${firstOperand} ${sign} ${secondOperand}`);
			const answer = readlineSync.question('Your answer: ');
			if (getCalc(firstOperand, secondOperand, sign) === Number(answer)) {
				console.log('Correct!');
			} else {
				console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCalc(firstOperand, secondOperand, sign)}'.`);
				console.log(`Let's try again, ${name}!`);
				return;
			}
		};
		console.log(`Congratulations, ${name}!`);
		return;
	};
	games(getCalc, getRandomNumber);
};