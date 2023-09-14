import useCounterStore from "../../stores/bear";

function Counter() {
    // Use the Zustand store
    const { count, increment, decrement } = useCounterStore();
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }

  export default Counter;