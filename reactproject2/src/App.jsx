import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './component/Demo'

function App() {
  let a=10;
  let b=20;
function name(){
  return "John";

}
function calc(a,b,op){
  if(op=='+'){
    return "Sum = "+(a+b);
  }
  else if(op=='-'){
    return "Difference = "+(a-b);
  }
  if(op!='+' && op!='-'){
    return "Multiplication = "+(a*b);
  }

}  
function table(){
  

}

  return (
    <div>
      <h1>Introduction</h1>
      
      <h2>value of a= {a}</h2>
      <h2>value of b= {b}</h2>
      <h1>Use of functions with jsx</h1>
      <h2>My name is {name()}</h2>
      <h2>{calc(4,2,'')}</h2>
      
    </div>
    
    
  )
}


export default App
