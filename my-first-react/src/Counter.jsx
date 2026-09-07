import { useState } from "react";
export default function Counter(props) {
   const [count, setCount] = useState(props.startValue);
   function increment() {
    setCount(count + 1);
   }
    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}