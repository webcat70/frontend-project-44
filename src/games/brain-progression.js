import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import getRandomNumber from '../util.js';


const progressionLength = getRandomNumber(5, 10);
const number = getRandomNumber(1, 100);
const increment = getRandomNumber(1, 10);

const getProgression = (number, increment, progressionLength) => {
	const progression = [];
	for (let i = number; progression.length < progressionLength; i += increment) {
		progression.push(i);
	}
	return progression;
};

export default () => {
	const games = () => {
		const name = greetings();
		console.log('What number is missing in the progression?');
		for (let i = 1; i <= 3; i += 1) {
			const array = getProgression(number, increment, progressionLength);
			const hiddenNumber = getRandomNumber(0, progressionLength - 1);
			const result = array[hiddenNumber];
			array[hiddenNumber] = '..';
			console.log(`Question: ${array.join(' ')}`);
			const answer = readlineSync.question('Your answer: ');
			if (result === Number(answer)) {
				console.log('Correct!');
			} else {
				console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
				console.log(`Let's try again, ${name}!`);
				return;
			}
		}
		console.log(`Congratulations, ${name}!`);
		return;
	};
	games(getProgression, getRandomNumber);
};