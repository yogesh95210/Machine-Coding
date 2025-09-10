import React, { useRef, useState } from 'react'
function ToastContainer() {
    const [toast,setToast]=useState([])
    const timerRef= useRef({})
    const handleClose =(id)=>{
        clearTimeout(timerRef.current[id])
        delete timerRef.current[id]
       setToast((prevToast)=>{
        const filterdArr= prevToast.filter((toast)=>{
            return toast.id !==id
        })
        return filterdArr
       }) 
    }

    const handleAdd= (message,type)=>{
        const id= new Date().getTime()
        const newToasts= [...toast, {id,message,type}]
        setToast(newToasts)
     timerRef.current[id]= setTimeout(()=> handleClose(id),5000)
    }
  return (
    <div className='container'>
      <div className='toast-container'>

      {toast.map(({id,message,type})=>{
        return (
        <div className={`toast ${type}`} key={id}>
            {message} <span onClick={()=>handleClose(id)}>X</span>
        </div>
        );
      })
       
      }
      </div>

        <div className='btn-conatiner'>
         <button onClick={()=>handleAdd("Success","success")}>Success Toast</button>
         <button onClick={()=>handleAdd("Info","info")}>Info Toast</button>
         <button onClick={()=>handleAdd("Warning","warning")}>Warning Toast</button>
         <button onClick={()=>handleAdd("Error","error")}>Error Toast</button>
        </div>
    </div>
  )
}

export default ToastContainer