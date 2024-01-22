import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/LOg";
import { WINNING_COMBINATIONS } from './WinningCombinations';
import GameOver from "./components/GameOver";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "Player 1",
  O: "Player 2"
}

const deriveWinner = (gameBoard) => {
  let winner;

  for (const wc of WINNING_COMBINATIONS) {
    const square1 = gameBoard[wc[0].row][wc[0].column];
    const square2 = gameBoard[wc[1].row][wc[1].column];
    const square3 = gameBoard[wc[2].row][wc[2].column];

    if (square1 && square1 === square2 && square1 === square3) {
      winner = square1;
      break;
    }
  }

  return winner;
}

const deriveGameBoard = (gameTurns) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];

  for (const turn of gameTurns) {
    const { square, playerSymbol } = turn;
    const { row, column } = square;

    gameBoard[row][column] = playerSymbol;
  }

  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const getActivePlayerSign = (gameTurns) => (gameTurns[0] && gameTurns[0].playerSymbol === 'X') ? 'O' : 'X';
  const activePlayerSign = getActivePlayerSign(gameTurns);

  const onPlayedHandler = (rowIndex, colIndex) => {
    setGameTurns(prevGameTurns => {
      const currentSymbol = getActivePlayerSign(prevGameTurns);
      const updatedTurns = [{ square: { row: rowIndex, column: colIndex }, playerSymbol: currentSymbol }, ...prevGameTurns];
      return updatedTurns;
    });
  }

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard);

  const onRematchHandler = () => {
    setGameTurns([]);
  }

  const isDraw = !winner && gameTurns.length == 9;

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevState => {
      return {
        ...prevState,
        [symbol]: newName
      }
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player Name={PLAYERS.X} Symbol="X" IsActive={activePlayerSign === 'X'} onNameChanged={handlePlayerNameChange} />
          <Player Name={PLAYERS.O} Symbol="O" IsActive={activePlayerSign === 'O'} onNameChanged={handlePlayerNameChange} />
        </ol>
        {(winner || isDraw) && <GameOver Winner={players[winner]} onRematch={onRematchHandler} />}
        <GameBoard OnPlayed={onPlayedHandler} Board={gameBoard} />
      </div>
      <Log Turns={gameTurns} />
    </main>
  );
}

export default App;
