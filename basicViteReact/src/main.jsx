import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank',
  },
  'click me to open',
  

)

const reactdefined = <a href='https://google.com'> click to visit</a>


createRoot(document.getElementById('root')).render(
  reactdefined
)
