import { useState } from "react";
import Square from "../Components/Square";
import Style from "../styles/Board.module.css";

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

  const reSetHandler = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  };

  return (
    <div>
      <p> Hey {currentPlayer} , this is your turn</p>

      <div className={Style.boardShape}>
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
      </div>

      <button className={Style.reset} onClick={reSetHandler}>
        RESET
      </button>

      <p>this is board</p>
    </div>
  );
};

export default Board;
