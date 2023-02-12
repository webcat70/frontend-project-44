import greetings from '../src/cli.js';
import readlineSync from 'readline-sync';


export default (games, description) => {
  const name = greetings();
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [result, question] = games();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
