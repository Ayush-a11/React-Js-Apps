import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] =useState("olive");

  return (
    <>
      <div className="flex " style={{backgroundColor: color}}>
      <button  className="m-4 bg-red-500"  onClick={() => setColor("red")}>Red</button>
      <button  className="m-4 bg-white-500"  onClick={() => setColor("black")}>Black</button>
      <button  className="m-4 bg-green-500"  onClick={() => setColor("green")}>Green</button>
      <button  className="m-4 bg-blue-500"  onClick={() => setColor("blue")}>Blue</button>
      <button  className="m-4 bg-pink-500" onClick={() => setColor("pink")}>Pink</button>
      </div>
    </>
  )
}

export default App
