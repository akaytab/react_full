import { useState } from 'react'
import './App.css'
import AddTodo from './component/AddToDo'
import Todos from './component/Todos'

function App() {

  return (
    <>
      <h1>RDEUX TOOLKIT</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
