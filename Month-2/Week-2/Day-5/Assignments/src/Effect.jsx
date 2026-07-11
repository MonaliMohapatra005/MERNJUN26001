import React, { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [inc, setInc] = useState(0);

  useEffect(()=>{
      console.log("at every render")
  })

    useEffect(() => {
      console.log("at first render");
    }, []);

  useEffect(() => {
    console.log("based on dep");

    return ()=>{
        console.log("value removed")
    }
  }, [count]);
  return (
    <div>
      Effect
      <br />
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <br />
      <button onClick={() => setInc(inc + 1)}>inc  {inc}</button>
    </div>
  );
}

export default Effect;
