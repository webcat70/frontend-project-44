import getRandomNumber from '../util.js';
import indexGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = (num) => {
	if (num % 2 === 0) {
		return 'yes';
	} else {
		return 'no';
	}
};

export default () => {
	const games = () => {
		const randomNumber = getRandomNumber(1, 100);
		const result = getEven(randomNumber);
		const question = randomNumber;
		return [result, question];
	};
	indexGames(games, description);
};
