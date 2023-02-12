import getRandomNumber from "../util.js";
import runGames from "../index.js";

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = randomNumber;
  const result = getPrime(randomNumber) ? "yes" : "no";
  return [result, question];
};

export default () => {
  runGames(getRoundData, description);
};
