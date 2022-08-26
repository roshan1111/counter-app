import React, { useState } from "react";


//onclick handle
const Counters = () => {
const[count, setCount] = useState(0);


  const addHandler = () => {
    setCount((count + 1));
  };
  const subHandler = ()=>{
    setCount((count - 1));
  }

  const recHandler = ()=>{
    setCount((0));
  }




  return (
    <>
        <h2>Counters : {count}</h2>

    <div className="counterbtn">


<button onClick={addHandler}>+</button>
<button onClick={subHandler}>-</button>
<button onClick={recHandler}>Reset</button>
    </div>
     


    </>
  );
};
export default Counters;
