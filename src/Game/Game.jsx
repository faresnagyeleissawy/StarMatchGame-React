// Star Match Game

import { useDeferredValue, useEffect, useState } from "react";
import "./style.css";
import BtnNumber from "./BtnNumber";
import DisplayStars from "./DisplayStars";
import PlayAgain from "./PlayAgain";
//math handel function//
const utils = {
  // Sum an array
  sum: (array) => array.reduce((acc, curr) => acc + curr, 0),

  // create an arrayay of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

const StarMatch = () => {
  //Hoks state
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNum, setavailableNum] = useState(utils.range(1, 9));
  const [candideteNum, setcandideteNum] = useState([]);
  const [timeover, setTimeover] = useState(10);

  //computation based on state
  const areWrong = utils.sum(candideteNum) > stars;
  const gameStatus =
    availableNum.length === 0 || stars === 0
      ? "win"
      : timeover === 0
      ? "lost"
      : "active";
  //use effect to remove and creat settimeout side effect
  useEffect(() => {
    if (timeover > 0) {
      const timeID = setTimeout(() => {
        setTimeover(timeover - 1);
      }, 1000);
      return () => clearTimeout(timeID);
    }
  });
  //function handel button number state
  const numberState = (number) => {
    if (!availableNum.includes(number)) {
      return "used";
    }
    if (candideteNum.includes(number)) {
      return areWrong ? "wrong" : "candidate";
    }
    return "available";
  };
  // function handel data of game
  const numberClick = (number, currentSatuse) => {
    if (currentSatuse === "used") {
      return;
    }
    const newcandidate =
      currentSatuse === "available"
        ? candideteNum.concat(number)
        : candideteNum.filter((n) => n !== number);
    if (utils.sum(newcandidate) !== stars) {
      setcandideteNum(newcandidate);
    } else {
      const newAvilableNumber = availableNum.filter(
        (n) => !newcandidate.includes(n)
      );
      setStars(utils.randomSumIn(newAvilableNumber, 9));
      console.log(newAvilableNumber);
      setavailableNum(newAvilableNumber);
      setcandideteNum([]);
    }
  };
  //function to reset state
  const reSetState = () => {
    setStars(utils.random(1, 9));
    setavailableNum(utils.range(0, 9));
    setcandideteNum([]);
    setTimeover(10);
  };
  //handel UI of the game
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== "active" ? (
            <>
              <PlayAgain
                onClick={reSetState}
                setTimeover={() => setTimeover(0)}
                State={gameStatus}
              />
            </>
          ) : (
            <DisplayStars count={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            <BtnNumber
              key={number}
              num={number}
              stats={numberState(number)}
              onClick={numberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time: {timeover}</div>
    </div>
  );
};

export default StarMatch;
