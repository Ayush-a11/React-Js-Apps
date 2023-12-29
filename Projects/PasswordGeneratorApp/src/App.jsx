import { useState,useCallback ,useEffect,useRef} from 'react'
import './App.css'

function App() {

  const [password,setPassword] = useState("");
  const [length,setLength] = useState(6);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [specialChars,setSpecialChars] = useState(false);
  const [text,setText]=useState('none');
  
  //useRef hook

  const passwordRef=useRef(null);

  const copyToClipboard = ()=>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
    setText('block')
    setTimeout(()=>{
      setText('none')
    },1000)
    
  }
  const changePassword =useCallback(()=>{

      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz"
      if(numberAllowed) str+="1234567890"
      if(specialChars) str+="!@#$%^&*(){}~`"

      for(let i=0; i<length;i++){

        let randomIndex=Math.floor(Math.random()*str.length+1);

        pass+=str.charAt(randomIndex);
      }

      setPassword(pass);
  },
  [length,numberAllowed,specialChars,setPassword])

  useEffect(() => {
    changePassword()
  },
  [length,numberAllowed,specialChars,setPassword])
  return (
    <>
      <h1 className="text-pink-300 font-bold font-sans text-5xl">Welcome to Password Generator!</h1><br></br>
    <div className='flex flex-col justify-center align-center '>
      <div className='flex  align-center justify-center h-11 bg-gray-100 py-4'>
      <h1 className="text-pink-500 font-bold text-sm" style={{display: text}}>Text Copied!</h1>
      </div>
     <div className="flex  justify-center align-center w-120 h-50 bg-gray-900 py-4"> 
          <input  className='rounded-md  text-center' type="text" placeholder="Password" value={password} ref={passwordRef}/>
          <button className="bg-pink-500 text-white rounded-lg font-bold mx-4 px-5 hover:bg-white hover:text-black
          hover:border-solid" onClick={copyToClipboard}> Copy Password</button>

          
     </div>
     <div className=" flex  bg-gray-900 text-pink-400 w-90 align-center justify-center">
     <input className='' type="range" min="6" max="20" id="length" value={length} onChange={(e)=>setLength(e.target.value)} />
     <label className='font-bold' htmlFor="length">Length[{length}]</label>
     <input className='mx-2' type="checkbox" checked={numberAllowed} onClick={()=> setNumberAllowed(!numberAllowed)}/>
      <label  className='font-bold' htmlFor=''>Number</label>
      <input  className='mx-2'type="checkbox" checked={specialChars}  onClick={()=> setSpecialChars(!specialChars)}/>
      <label  className='font-bold' htmlFor=''>SpecialChar</label>
      </div>
      </div>
    </>
  )
}

export default App
