import getRandomNumber from "../util.js";
import runGames from "../index.js";

const description = "What is the result of the expression?";

const getCalc = (num1, num2, sign) => {
  switch (sign) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      throw new Error("Unknown state!");
  }
};

const getRoundData = () => {
  const signsArray = ["+", "-", "*"];
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);
  const signIndex = getRandomNumber(0, signsArray.length - 1);
  const sign = signsArray[signIndex];
  const result = getCalc(firstOperand, secondOperand, sign);
  const question = `${firstOperand} ${sign} ${secondOperand}`;
  return [String(result), question];
};

export default () => {
  runGames(getRoundData, description);
};
