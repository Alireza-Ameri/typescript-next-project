import React from "react";
import Style from "../styles/Square.module.css";

type player = "X" | "O" | null;

interface IProps {
  value: player;
  winner: player;
  onClick: () => void;
}

const Square: React.FC<IProps> = ({ value, onClick, winner }) => {
  if (!value) {
    return (
      <button
        className={Style.square}
        onClick={onClick}
        disabled={Boolean(winner)}
      />
    );
  }
  return value === "X" ? (
    <button className={Style.square_x}  disabled>
      {value}
    </button>
  ) : (
    <button className={Style.square_o}  disabled>
      {value}
    </button>
  );
};

export default Square;
