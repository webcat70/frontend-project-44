import getRandomNumber from '../util.js';
import indexGames from '../index.js';

const description = 'What number is missing in the progression?';

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
		const array = getProgression(number, increment, progressionLength);
		const hiddenNumber = getRandomNumber(0, progressionLength - 1);
		const result = array[hiddenNumber];
		array[hiddenNumber] = '..';
		const question = `${array.join(' ')}`;
		return [String(result), question];
	}
	indexGames(games, description);
};