import { useState } from "react";
//ComponentResibility one way flow of data
function Button(props) {
  const handelClickBtn = () => props.onClick(props.increament);
  return (
    <button style={{ width: 100 }} onClick={handelClickBtn}>
      +hello
    </button>
  );
}
function DisplayCounter(props) {
  return <div>{props.message}</div>;
}

function ComponentResibility() {
  const [Counter, setCounter] = useState(0);
  const handelCklick = (increament) => setCounter(Counter + 1, increament);
  return (
    <div>
      <Button onClick={handelCklick} increament={6} />
      <DisplayCounter message={Counter} />
    </div>
  );
}
export default ComponentResibility;
