import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ OnPlayed, Turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of Turns) {
        const { square, playerSymbol } = turn;
        const { row, column } = square;

        gameBoard[row][column] = playerSymbol;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key="rowIndex">
                    <ol>
                        {row.map((column, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => OnPlayed(rowIndex, colIndex)}>{column}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}