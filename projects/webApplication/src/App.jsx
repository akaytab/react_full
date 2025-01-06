import { useState } from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
