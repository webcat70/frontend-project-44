import getRandomNumber from '../util.js';
import runGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getRoundData = () => {
  const randomNumber = getRandomNumber(1, 100);
  const result = getEven(randomNumber);
  const question = randomNumber;
  return [result, question];
};

export default () => {
  runGames(getRoundData, description);
};
