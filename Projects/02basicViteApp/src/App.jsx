import { useState } from "react";
import tailwindConfig from "../tailwind.config";

  

function App() {

  let [Counter, setCounter] = useState(10);

  const counterIncrement= () => {
    if(Counter< 20){
    setCounter(Counter+1);
    }
  }
  const counterDecrement= () => {
    if(Counter >0){
    setCounter(Counter-1);
    }
  }

  return (
      < >
        <h1>Counter value is {Counter}</h1>
        <div class="p-4 text-sky-500 dark:text-sky-400">
        <button  onClick={counterIncrement}>Counter++</button>
        <button   onClick={counterDecrement}>Counter--</button>
        </div>

        

      </>

    )
}

export default App
