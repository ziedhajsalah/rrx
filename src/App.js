import React from 'react'
import './App.css'
import { Navbar } from './modules'


const App = ({children}) => (
  <div>
    <Navbar />
    <div>{children}</div>
  </div>
)

export default App
