import { useState } from "react";


export default function GameBoard({ onSelectedSquare, gameBoard }) {

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   function handleSelectedSquare(rowIndex, colIndex) {
  //     // set function is automatically given the latest value of gameBoard
  //     setGameBoard((prevGameBoard) => {
  //       // ... means destruction
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });

  //     onSelectedSquare();
  //   }

  return (
    // for this square, provide buttons players can choose
    // button passes rowIndex, colIndex, and playerSymbol
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectedSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
