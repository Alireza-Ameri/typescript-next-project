import { useState } from "react";
import Square from "../Components/Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );

  const [winner, setWinner] = useState(null);

  const setSquaresValue = (index: any) => {
    const newData = squares.map((value, i) => {
      if (i === index) {
        return currentPlayer;
      } else {
        return value;
      }
    });

    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <div>
      <p> Hey {currentPlayer} , this is your turn</p>

      {Array(9)
        .fill(null)
        .map((_, index) => {
          return (
            <Square
              winner={winner}
              key={index}
              onClick={() => setSquaresValue(index)}
              value={squares[index]}
            />
          );
        })}

      <p>this is board</p>
    </div>
  );
};

export default Board;
