import { useState } from "react";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );

  return (
    <div>
      <p> Hey {currentPlayer} , this is your turn</p>

      <p>this is board</p>
    </div>
  );
};

export default Board;
