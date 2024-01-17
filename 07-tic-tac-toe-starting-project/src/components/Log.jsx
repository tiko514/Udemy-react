export default function Log({ Turns }) {
    return (<ol id="log">
        {Turns.map(turn =>
            <li key={`${turn.square.row},${turn.square.column}`}>
                {turn.playerSymbol} selected {turn.square.row}, {turn.square.column}
            </li>)}
    </ol>);
}