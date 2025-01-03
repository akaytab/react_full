import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count,setCounter]=useState(15)

  // let count =10;

 function add(){
   setCounter((prevent)=>{
    if(prevent < 20){
      return prevent+1
    }else{
      return prevent
    }
   })
   console.log("value added", count);
 }

 function remove(){
  setCounter((prevent)=>{
    if(prevent>0){
      return prevent-1
    }else{
      return prevent
    }
  });
  console.log("value removed",count);
 }

  return (
    <>
      <h1>Simple Counter App</h1>
      <h2>Counter Pointer = {count}</h2>
      <button onClick={add}>Add</button>
      <br></br>
      <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
