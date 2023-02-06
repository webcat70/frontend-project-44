install: #
	npm ci

brain-games: # Запускает игру brain-games
	node bin/brain-games.js

lint: # Линтер
	npx eslint .

brain-even: # Запускает игру brain-even
	node bin/brain-even.js

brain-calc: # Запускает игру brain-calc
	node bin/brain-calc.js