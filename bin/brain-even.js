#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const getEven = (num) => {
	if (num % 2 === 0) {
		return 'yes';
	} else {
		return 'no';
	}
};

const getRandomNumber = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

const name = greetings();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const games = (getEven, getRandomNumber) => {
	for (let i = 1; i <= 3; i += 1) {
		const randomNumber = getRandomNumber(1, 100);
		console.log(`Question: ${randomNumber}`);
		const answer = readlineSync.question('Your answer: ');
		if (getEven(randomNumber) === answer) {
			console.log('Correct!');
		} else {
			console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getEven(randomNumber)}'.`);
			console.log(`Let's try again, ${name}!`);
			return;
		}
	}
	console.log(`Congratulations, ${name}!`);
	return;
};
games(getEven, getRandomNumber);