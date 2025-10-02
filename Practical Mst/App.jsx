import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
      setMessage(""); 
    } 
    if (count + 1 === 10) {
      setMessage("Maximum limit reached!");
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("");
    }
  };
  const handleReset = () => {
    setCount(0);
    setMessage("");
  };

  return (
    <div>
      <h2>Counter with Constraints</h2>
      <h3>Count: {count}</h3>
      <p>{message}</p>
      <button onClick={handleIncrement} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={handleDecrement} style={{ marginRight: "10px" }}>
        Decrement
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
