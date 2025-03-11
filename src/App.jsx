import { useState } from 'react'
import './App.css'
import {NavBar, NavBarV, Content} from './components/index'

function App() {

  return (
    <div>
      <NavBarV/>
      <NavBar/>
      <Content/>
    </div>
    
  )
}

export default App
