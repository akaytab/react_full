import { useState } from 'react'

// import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/login'
import Profile from './component/profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Welcome</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
