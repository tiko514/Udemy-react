import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player Name="Player 1" Symbol="X" />
          <Player Name="Player 2" Symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
