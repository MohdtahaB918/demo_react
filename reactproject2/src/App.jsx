import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './component/Demo'

function App() {

  return (
    <div>
      <h1>React Project</h1>
      <Employee></Employee>
      <Example></Example>
      <Demo></Demo>
    </div>
    
    
  )
}

function Employee() {

  return (
    <div>
      <h2>This is a compnent</h2>
    </div>
    
    
  )
}

function Example() {

  return (
    <div>
      <h3>This is an Example</h3>
      
    </div>
    
    
  )
}
export default App
