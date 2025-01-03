 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Button from "./components/Buttons.jsx"

function App() {
 const[color,setcolor] =useState('pink')

  return (
    <div>
      <div className="w-full h-screen"
      style={{backgroundColor:color}}></div>
     <Button setColor={setcolor}/>
    </div>
  )
}

export default App
