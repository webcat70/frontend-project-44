install: #
	npm ci

brain-games: # Запускает игру brain-games
	node bin/brain-games.js

lint: # Линтер
	npx eslint