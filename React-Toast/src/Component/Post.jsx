import React, { useState,useEffect } from 'react'
import Pagination from './Pagination'
import './Post.css'

function Post() {
    const [data,setData]= useState([])
    const [pageNo,setPageNo]= useState(1)
    useEffect(()=>{
      fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`) 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
    },[pageNo])
  return (
    <div className='container'>
    <div className='post-container'>
    {data.map((item,index)=>{
        return  <img src={item.download_url}/>
    })}
   
    </div>
    <Pagination pageNo={pageNo} setPageNo={setPageNo}/>
    </div>
  )
}

export default Post