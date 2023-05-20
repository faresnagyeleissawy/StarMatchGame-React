import React from "react";
const PlayAgain = (props) => {
  if (props.State == "win") {
    props.setTimeover(0);
  }

  return (
    <div className="game-done">
      <div
        class="message"
        style={{ color: props.State === "lost" ? "red" : "green" }}
      >
        {props.State === "lost" ? "Loser" : "Winner"}
      </div>
      <button onClick={props.onClick}>Play Again</button>
    </div>
  );
};
export default PlayAgain;
