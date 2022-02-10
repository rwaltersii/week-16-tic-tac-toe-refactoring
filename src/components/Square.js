import React, { useState } from "react";

const Square = ({ takeTurn, id }) => {
  const mark = ["O", "X", "?"];
  // id is the square's number
  // filled tells you if square has been filled
  // tik tells you symbol in square (same as player)
  // You call takeTurn to tell Parent that the square has been filled
  const [filled, setFilled] = React.useState(false);
  const [tik, setTik] = React.useState(2);

  // Set a state for when the square should be disabled
  const [disabledSquare, setDisabledSquare] = useState(false);

  let xoColor = mark[tik] == "X" ? "red" : mark[tik] == "O" ? "white" : "black";

  return (
    <button
      // Part 2: update the return statement below to add css classes
      onClick={() => {
        setTik(takeTurn(id));
        setFilled(true);
        setDisabledSquare(true);
        console.log(`Square: ${id} filled by player : ${tik}`);
      }}
      disabled={disabledSquare}
    >
      <h1 className={xoColor}>{mark[tik]}</h1>
    </button>
  );
};

export default Square;
