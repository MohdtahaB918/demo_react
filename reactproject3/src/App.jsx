import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

let data="Demo"
function updata(){
  data="Example"
  alert(data)
}




function fun(){
      alert("Example of the Call Function ")
    }

const fruit=(name)=>{
  alert(name)
}

const apple=(name)=>{
  alert(name)
}

const banana=(name)=>{
  alert(name)
}

  return (
    <>
      <h1>State in React</h1>
      <h1>(Demo)</h1>
      <button onClick={updata}>Click to change value</button>

       {/* <h1>Example of Arrow Function</h1>      
       <button onClick={fun}> Click to call function</button>
       <button onClick={()=>fruit("First Parameter")}> Click to Arrow function</button>
       <button onClick={()=>apple("Apple is Clicked")}> Click to Apple function</button>
       <button onClick={()=>banana("Banana is Clicked")}> Click to Banana function</button> */}
    </>
    
    
  )
}

export default App
