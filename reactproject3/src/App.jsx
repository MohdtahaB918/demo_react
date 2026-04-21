import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

const [data,setCount]=useState("Hello")
const [isOn,setisOn]=useState(false);

function toggleButton(){
      setisOn(!isOn)

    }

function fun(){
  setCount("bye")
}


  return (
    <>
      <h1>State of variable in React</h1>
      <h1>(data)</h1>
      <button onClick={fun}>Change Text</button>
      <h1>Toggle Button</h1>
      <h2>Status:{isOn ? "ON":"OFF"}</h2>
      <button onClick={toggleButton}>{isOn ? "Turn OFF" : "Turn ON"}</button>

       {/* <h1>Example of Arrow Function</h1>      
       <button onClick={fun}> Click to call function</button>
       <button onClick={()=>fruit("First Parameter")}> Click to Arrow function</button>
       <button onClick={()=>apple("Apple is Clicked")}> Click to Apple function</button>
       <button onClick={()=>banana("Banana is Clicked")}> Click to Banana function</button> */}
    </>
    
    
  )
}

export default App
