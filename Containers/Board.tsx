import { useState, useEffect } from "react";
import Square from "../Components/Square";
import Style from "../styles/Board.module.css";

type player = "X" | "O" | null;

const Board = () => {
  const [squares, setSquares] = useState<player[]>(Array(9).fill(null));

  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );

  const [winner, setWinner] = useState<any>(null);

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

  const winnerCalculation = (squares: player[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  useEffect(() => {
    const w = winnerCalculation(squares);
    if (w) {
      setWinner(w);
    }

    if (!w && !squares.filter((square) => !square).length) {
      setWinner("no winner");
    }
  });

  return (
    <div>
      {!winner && <p> Hey {currentPlayer} , this is your turn</p>}

      {winner && winner !== "no winner" && (
        <p>Congratulations {winner} player </p>
      )}
      {winner && winner === "no winner" && <p> Sorry we have {winner}</p>}

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
    </div>
  );
};

export default Board;
