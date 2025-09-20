import React from 'react'
import Accordation from './Accordation'
import data from "../data.json"

function Faq() {
    return (
    <div>
    <h1>FAQ's</h1>
    {data.freq.map((obj,index)=>{
     return <Accordation faq={obj}/>
    })}
    </div>
  )
}

export default Faq