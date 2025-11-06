// Counter.jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <section className="text-center p-4 bg-white rounded-xl shadow w-60">
      <h3 className="text-2xl font-bold mb-3">Counter: {count}</h3>
      <div className="flex justify-center gap-4">
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          –
        </button>
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          +
        </button>
      </div>
    </section>
  );
}