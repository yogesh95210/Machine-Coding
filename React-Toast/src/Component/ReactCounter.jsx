import React, { useState } from 'react'

function ReactCounter() {
    const [count,setCount]=useState(0)
    const[step,setStep]=useState(1)

const handleIncrement=()=>{
    const interval= setInterval(()=>{
         setCount(prev=> prev+step)
    },1000)

    setTimeout(()=>{
     clearInterval(interval)
    },5000)
}

const handleDecrement=()=>{
    const interval= setInterval(()=>{
    setCount(prev=>(prev>0?prev-step:0))
    },1000)
    
    setTimeout(()=>{
        clearInterval(interval)
    },5000)
}
// handle all interval(clear all interval) on click 
const handleReset=()=>{
    setCount(0)
}

/// Handle auto Increment decrement 
const handleAutoIncDec= ()=>{
    let increment= 0;
    //start Inc
    const intervalInc = setInterval(()=>{
          setCount(prev=> prev+step)
          increment++
    },1000)
     setTimeout(()=>{
        clearInterval(intervalInc)

        let decrement=0
     const intervalDec= setInterval(()=>{
         setCount(prev=>(prev>0?prev-step:0))
         decrement++

        // Stop when we've decremented same number of times as increment
        if (decrement >= increment) {
          clearInterval(intervalDec);
        }
    },1000)

     },5000)
}


  return (
    <div>
    <h3>Counter {count}</h3> 

    <input
        type='number'
        value={step}
        onChange={(e)=>setStep(Number(e.target.value))}
    />

    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleAutoIncDec}>AutoIncrementDecrement</button>
    <button onClick={handleReset}>Reset</button>
    </div>
  )
}
export default ReactCounter