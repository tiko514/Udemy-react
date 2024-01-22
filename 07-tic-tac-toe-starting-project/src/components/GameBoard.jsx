export default function GameBoard({ OnPlayed, Board }) {

    return (
        <ol id="game-board">
            {Board.map((row, rowIndex) => (
                <li key="rowIndex">
                    <ol>
                        {row.map((column, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => OnPlayed(rowIndex, colIndex)} disabled={column != null}>{column}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}