import React from "react";
// Color Theme
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};
const BtnNumber = (props) => (
  <button
    className="number"
    style={{ backgroundColor: colors[props.stats] }}
    onClick={() => props.onClick(props.num, props.stats)}
  >
    {props.num}
  </button>
);
export default BtnNumber;
