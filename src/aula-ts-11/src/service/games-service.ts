import db from "../database/database";
import gamesRepository from "../repository/games-repository";
import { Game, newGame } from "./../protocols/game-protocol";

async function getGames() {
  return await db.query<Game>(`SELECT * FROM games`);
}

async function createGame(game: newGame) {
  if (gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  return await db.query(`INSERT INTO games (title, platform) VALUES ($1, $2)`, [title, platform]);

}

function gameAlreadyExists(game: newGame): boolean {
  const result = gamesRepository.getGameByTitleAndPlatform(game);
  return result ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;