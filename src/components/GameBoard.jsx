import { useState } from "react"

const basedGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

export default function GameBoard() {
    const [gameboard, setGameboard] = useState(basedGameBoard);



    function handleGameBoard(rowIndex, colIndex) {
        setGameboard(prevGB => {
            const copyOfGB = [...prevGB.map(innerArray => [...innerArray])]
            copyOfGB[rowIndex][colIndex] = 'X';
            return copyOfGB;
        })
    }

    return(
        <ol id="game-board">
            {gameboard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => ( <li key={colIndex}><button onClick={() => handleGameBoard(rowIndex, colIndex)}>{playerSymbol}</button></li>))}
                </ol>
            </li> )}
        </ol>
    )
}