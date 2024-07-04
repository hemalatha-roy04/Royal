import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  function increament() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <p>count:{count}</p>
      <button onclick={increament}>increament</button>
      <button onclick={decrement}>increament</button>
    </div>
  );
}
export default Counter;
