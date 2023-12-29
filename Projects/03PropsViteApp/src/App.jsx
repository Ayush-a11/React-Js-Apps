import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  let breedVal='German Shepard'

  let breedVal2='Toco'

  return (
    <>
     <h1 className="p-10 bg-grey-400">Practice Card Components using Props</h1>
     <div>
      <Card name="Tom" breed={breedVal}/>
      <Card name="Vino" breed={breedVal2}/>
      </div>
    </>
  )
}

export default App
