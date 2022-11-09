import { useState, useEffect } from "react";
function Count1(props) {
  const [count, setCount] = useState(5);

  // state1   , state2    ,  state3
  useEffect(componentRerender, []);

  useEffect(componentRerender, []);
  function componentRerender() {}
  // life cycle
  function increment() {
    // change count
    setCount((prev) => prev + 1);
  }
  function decrement() {}
  return (
    <div>
      <p>{props.text}</p>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button
        onClick={() => {
          increment(5);
        }}
      >
        increase by 5
      </button>
    </div>
  );
}
export default Count1;
