import { useContext } from "react";
import { CounterContext } from "../context/Counter.jsx";

function Counter() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("Counter must be used inside CounterProvider");
  }

  const { count, setCount } = context;

  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid white" }}>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
