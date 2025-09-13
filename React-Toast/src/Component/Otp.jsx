import  { useEffect, useRef, useState } from 'react'
import './Otp.css'
function Otp({OtpLength=6}) {
const [otpFields,setOtpFields]= useState(new Array(OtpLength).fill(""))
const ref= useRef([])
  const handleKeyDown= (e,index)=>{
    const key= e.key
    const copyOtpField=[...otpFields]
    if(key==="ArrowLeft"){
     if(index>0){ref.current[index-1].focus()}
     return
    }
    if(key==="ArrowRight"){
     if(index +1 < otpFields.length){
        ref.current[index+1].focus()
    }
    return
    }
    if(key==="Backspace"){
        copyOtpField[index]=""
        setOtpFields(copyOtpField)
        if(index>0){ref.current[index-1].focus()}
        return
    }
    if(isNaN(key)){
        return
    }
  
    copyOtpField[index]=key

    if(index +1 < otpFields.length){
     ref.current[index+1].focus()
    }
   
    setOtpFields(copyOtpField)
  }

  useEffect(()=>{
   ref.current["0"].focus()
  },[])

 //Paste full OTP
  const handlePaste =(e)=>{
    e.preventDefault();
     const paste = e.clipboardData.getData("text").slice(0, OtpLength).split("");
     setOtpFields(paste.concat(Array(OtpLength - paste.length).fill("")))
      paste.forEach((char, idx) => {
    if (ref.current[idx]) ref.current[idx].value = char;
  });
  if (paste.length < OtpLength) {
    ref.current[paste.length].focus();
  }
  }
  return (
    <div className='container'>
      {otpFields.map((value,index)=>{
        return <input
         key={index}
          type='text'
           value={value}
           maxLength={1}   // Restrict each input to 1 digit
            ref= {(currentInput)=>(ref.current[index]=currentInput)}
            onKeyDown={(e)=>handleKeyDown(e,index)}
            onPaste={handlePaste}
        />
    })}
    </div>
  )
}

export default Otp