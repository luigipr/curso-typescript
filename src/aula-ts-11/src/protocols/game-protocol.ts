export type Game = {
  id: number,
  title: string;
  platform: string;
}

export type newGame = Omit<Game, "id">;