import getRandomNumber from '../util.js';
import indexGames from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

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
		const firstOperand = getRandomNumber(1, 100);
		const secondOperand = getRandomNumber(1, 100);
		const result = gcd(firstOperand, secondOperand);
		const question = `${firstOperand} ${secondOperand}`;
		return [String(result), question];
		};
		indexGames(games, description);
	};