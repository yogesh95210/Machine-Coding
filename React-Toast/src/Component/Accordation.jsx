import React, { useState } from 'react'
import './Accordation.css'
function Accordation({faq}) {
    const[show,setShow]=useState(false)
  return (
    <div className='accordation'>
    <h3>{faq.question}  
    <span onClick={()=>{setShow(!show)}}>{ show ? "-" : "+" }</span></h3>
    {show ?<p>{faq.answer}</p>:""}
    </div>
  )
}

export default Accordation