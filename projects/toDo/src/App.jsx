import { useState,useEffect } from 'react'
import { Todoprovider } from './contexts/ToDoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';


function App() {
  const [todos,setTodo]=useState([]);

  const addToDo = (todo)=>{
    setTodo((prev)=>[...prev,{id:Date.now(),...todo}]);
  }

  const editToDo =(id,todo)=>{
    setTodo((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))

  }

  const deleteToDo =(id)=>{
    setTodo((prev)=>prev.filter((todo)=> todo.id !== id))
  }

  const toggleComplete =(id)=>{
    setTodo((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}:prevTodo)))
  }

  useEffect(()=>{
   const todos = JSON.parse(localStorage.getItem('todos'))
    
   if(todos && todos.length>0){
    setTodo(todos);
   }
  },[]);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])




  return (
  <Todoprovider value={
    {todos,addToDo,editToDo,deleteToDo,toggleComplete}
  }>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          {/* Todo form goes here */} 
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {
            todos.map((todo)=>(
              <div key={todo.id}
              className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </Todoprovider>
  

  )
}

export default App
