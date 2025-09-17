import React, { useEffect, useState } from 'react'

const STATE= {
    LOADING:"LOADING",
    ERROR: "ERROR",
    SUCCESS: "SUCCESS"
}
function TypeAhead() {
    const [query,setQuery]=useState("")
    const [result,setResult]= useState([])
    const [status,setStatus]=useState(STATE.LOADING)

    useEffect(()=>{
        const abortController= new AbortController()
        const {signal}= abortController
        const fetchData= async ()=>{
            try{ 
            setStatus(STATE.LOADING)
            const response= await fetch(`https://dummyjson.com/products/search?q=${query}&limit=10`)
            {signal}
            const data= await response.json()
            setStatus(STATE.SUCCESS)
            setResult(data.products)
        }
            catch(error){
              if(error.name!== "AbortError") {
                setStatus(STATE.ERROR)
            } 
            }
        }
    const timerID= setTimeout(fetchData,1000)
    return ()=>{
        clearTimeout(timerID)
        abortController.abort()
    }
    },[query])

  return (
    <div>
        <input
         type='text'
         value={query}
         placeholder='Search...' 
         onChange={(e)=>{setQuery(e.target.value)}}  
        />
        {status=== STATE.LOADING && <div>......Loading</div>}
        {status=== STATE.ERROR && <div>Error Occured</div>}
     
        {status===STATE.SUCCESS && ( 
         <ul>
        {result.map((product)=>{
        return <li key={product.id}>{product.title}</li>
        })}
        </ul>
        )}
    </div>
  )
}

export default TypeAhead