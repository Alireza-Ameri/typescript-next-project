import React from "react";

type player = "X" | "O" | null;

interface IProps {
  value: player;
  winner: player;
  onClick: () => void;
}

const Square: React.FC<IProps> = ({ value, onClick, winner }) => {
  if (!value) {
    return <button onClick={onClick} disabled={Boolean(winner)} />;
  }
  return <button disabled>{value}</button>;
};

export default Square;
