import React from "react";
import './AllPromise.css'

function AllPromise() {


  // GET API with Promise
  function getProduct() {
    return fetch("https://fakestoreapi.com/products/1")
      .then((res) => {
        if (!res.ok) throw new Error("API Failed ❌");
        return res.json();
      });
  }

  const handleClick = () => {
    getProduct()
      .then((data) => {
        console.log("✅ API Response:", data); 
      })
      .catch((err) => {
        console.error("❌ Error:", err);
      });
  };
// Second  Promise.all

function promiseAll(){
   return Promise.all([
   fetch("https://fakestoreapi.com/products/1").then((res) => res.json()),
   fetch("https://fakestoreapi.com/products/2").then((res) => res.json())
   ])
}
  const handlePromiseAll = ()=>{
      promiseAll()
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.error(err)
      })
  }


  function promiseAllSettled(){
    return Promise.allSettled([
   fetch("https://fakestoreapi.com/products/1").then((res) => res.json()),
   fetch("https://fakestoreapi.com/products/2").then((res) => res.json())
   ])
  }

  const handlePromiseAllSettled =()=>{
    promiseAllSettled()
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.error(err)
    })
  }

  // Promise.race([p1, p2, ...])
//Jo promise sabse pehle settle hota hai (resolve/reject) wahi return hota hai.

 function promiseRace(){
    return Promise.race([
   fetch("https://fakestoreapi.com/products/1").then((res) => res.json()),
   fetch("https://fakestoreapi.com/products/2").then((res) => res.json())
   ])
  }
const handlePromiseRace=()=>{
   promiseRace()
   .then((res)=>{
    console.log(res)
   })
   .catch((err)=>{
    console.error(err)
   })
}

// Promise.any([p1, p2, ...])
//Jo sabse pehle resolve hota hai woh return hoga.
// Agar sabhi reject ho gaye → AggregateError.


function promiseAny(){
    return Promise.any([
   fetch("https://fakestoreapi.com/products/1").then((res) => res.json()),
   fetch("https://fakestoreapi.com/products/2").then((res) => res.json())
   ])
  }
const handlePromiseAny=()=>{
   promiseAny()
   .then((res)=>{
    console.log(res)
   })
   .catch((err)=>{
    console.error(err)
   })
}
  return (
    <div className="promise">
    <div className="promise-container">
      <button onClick={handleClick}>Promise Method</button>
      <button onClick={handlePromiseAll}>Promise.all method</button>
      <button onClick={handlePromiseAllSettled}>Promise.allSettled method</button>
      <button onClick={handlePromiseRace}>Promise.Race</button>
      <button onClick={handlePromiseAny}>Promise.Any</button>
    </div>
    </div>
  );
}

export default AllPromise;
