import { useState } from "react";

function useCounter(initialVal= 0,step=1){

    const [count,setCount]= useState(initialVal)

    const increment= ()=>{
   setCount((prev)=> prev+ step)
    }
    const decrement= ()=>{
         setCount((prev)=> prev- step)
    }
    const reset= ()=>{
            setCount(initialVal)
    }

    return {count,increment,decrement,reset}
}

export default useCounter