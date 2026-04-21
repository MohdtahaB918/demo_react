import React, { useState } from "react";

import Showhidetext from './A-2/Showhidetext';
import Inputbox from   '/A-2/Inputbox';

function App(){
  return(
    <>
     <Showhidetext/>
     <Inputbox/>
    </>
  )

}



/*function Counter() {
  const [count, setCount] = useState(0);

  // Event handlers
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement} style={{ margin: "0 10px" }}>
        -
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;*/
export default App