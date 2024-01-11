import { useSelector } from 'react-redux'
import {useState} from 'react'
import './App.css'
import { useEffect } from 'react'
import {Header,Footer} from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [status,setStatus] =useState(false)
  const selector=useSelector((state)=>console.log(state));

  useEffect(() => {
    
      if(selector && selector.state.loggedIn) {
        setStatus(true);
      }
  }, [])
  

  return  status?(
    <><Header/>
		<Outlet/>
		<Footer/>
    </>
  ):
  (
  <><Header/>
  <Outlet/>
  <Footer/> 
  </>
  )
}

export default App
