export default function GameOver({ Winner, onRematch }) {
    return <div id="game-over">
        <h2>Game Over!</h2>
        {Winner && <p>{Winner} won!</p>}
        {!Winner && <p>It's a draw!</p>}
        <p>
            <button onClick={onRematch}>Rematch!</button>
        </p>
    </div>
}