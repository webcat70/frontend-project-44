import getRandomNumber from '../util.js';
import runGames from '../index.js';

const description = 'What number is missing in the progression?';

const progressionLength = getRandomNumber(5, 10);
const number = getRandomNumber(1, 100);
const increment = getRandomNumber(1, 10);

const getProgression = (num, incr, progrLength) => {
  const progression = [];
  for (let i = num; progression.length < progrLength; i += incr) {
    progression.push(i);
  }
  return progression;
};

const getRoundData = () => {
  const array = getProgression(number, increment, progressionLength);
  const hiddenNumber = getRandomNumber(0, progressionLength - 1);
  const result = array[hiddenNumber];
  array[hiddenNumber] = '..';
  const question = `${array.join(' ')}`;
  return [String(result), question];
};

export default () => {
  runGames(getRoundData, description);
};
