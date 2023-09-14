import db from "../database/database";
import { Game, newGame } from "../protocols/game-protocol";


async function getGames() {
  const result = gamesRepository.getGames();
  return result.rows
}

async function createGame(game: newGame) {
  const {title, platform} = game

  return await db.query(`INSERT INTO games (title, platform) VALUES ($1, $2)`, [title, platform]);
}

async function getGameByTitleAndPlatform(game: newGame) {
  return games.find(({ title, platform }) => {
    return game.title === title && game.platform === platform;
  })
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;