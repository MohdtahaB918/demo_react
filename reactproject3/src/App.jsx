import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
function abc(){
      alert("Function Called")
    }
    

function apple(){
      alert("You have clicked on Apple Button")
    }

function banana(){
      alert("You have clicked on Banana Button")
    }        
  return (
    <div>
      <button1 onClick={abc}>Click </button1>
      <button2 onClick={apple}> Click Apple </button2>
      <button3 onClick={banana}> Click Banana</button3>

    </div>
    
    
  )
}

export default App
