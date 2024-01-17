import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/LOg";

function App() {
  const [activePlayerSign, setActivePlayerSign] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  const onPlayedHandler = (rowIndex, colIndex) => {
    setActivePlayerSign(prevState => prevState === 'X' ? 'O' : 'X');

    setGameTurns(prevGameTurns => {
      const currentSymbol = (prevGameTurns[0] && prevGameTurns[0].playerSymbol === 'X') ? 'O' : 'X';
      const updatedTurns = [{ square: { row: rowIndex, column: colIndex }, playerSymbol: currentSymbol }, ...prevGameTurns];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player Name="Player 1" Symbol="X" IsActive={activePlayerSign === 'X'} />
          <Player Name="Player 2" Symbol="O" IsActive={activePlayerSign === 'O'} />
        </ol>
        <GameBoard OnPlayed={onPlayedHandler} Turns={gameTurns} />
      </div>
      <Log Turns={gameTurns} />
    </main>
  );
}

export default App;
