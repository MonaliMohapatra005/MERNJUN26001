import React, { useEffect, useState } from 'react'

function Effect() {
    const [count, setCount] = useState(0);
    const [inc, setInc] = useState(0);


    useEffect(()=>{
        console.log("at every render")
    })

    useEffect(()=>{
        console.log("at first render")
    }, [])

    useEffect(()=>{
        console.log("based on dep")
    }, [inc])


  return (
    <>
    <button onClick={()=> setCount(count+1)}>Count</button>
    <button onClick={()=> setInc(inc+1)}>inc</button>

    </>
  )
}

export default Effect