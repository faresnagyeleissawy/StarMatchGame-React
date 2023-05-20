import React from "react";
const utils = {
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
};
const DisplayStars = (props) => (
  <>
    {utils.range(1, props.count).map((strId) => (
      <div className="star" key={strId} />
    ))}
  </>
);
export default DisplayStars;
