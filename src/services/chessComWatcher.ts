import { LoadedGame } from "@/types/game";
import { getChessComUserRecentGames } from "@/lib/chessCom";

class ChessComWatcher {
  private username: string;
  private lastGameId: string | null = null;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(username: string) {
    this.username = username;
  }

  public startWatching(onNewGame: (game: LoadedGame) => void) {
    this.intervalId = setInterval(async () => {
      const games = await getChessComUserRecentGames(this.username);
      if (games.length > 0) {
        const mostRecentGame = games[0];
        if (mostRecentGame.id !== this.lastGameId) {
          this.lastGameId = mostRecentGame.id;
          onNewGame(mostRecentGame);
        }
      }
    }, 10000); // Check every 10 seconds
  }

  public stopWatching() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

export default ChessComWatcher;
