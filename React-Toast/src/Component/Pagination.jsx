import React, { useState } from 'react'
import './Pagination.css'
function Pagination({pageNo,setPageNo}) {
    const handleNext= ()=>{
        setPageNo(pageNo+1)
    }
    const handlePrev =()=>{
        setPageNo(pageNo-1)
    }
  return (
    <div className='pagination-container'>
    {pageNo>1 ?(<div className='page-btn' onClick={handlePrev}>{"<"}</div>):("")}
        
        <div className='page-btn'>{pageNo}</div>
        <div className='page-btn' onClick={handleNext}>{">"}</div>
    </div>
  )
}

export default Pagination