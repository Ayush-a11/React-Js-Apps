import React, { useState } from 'react'
import userDataContext from '../context/UserDataContext'
import { useContext } from 'react'

function Login() {

	const {setUser}=useContext(userDataContext);
	const [username, setusername] = useState('')
	const [password, setpassword] = useState('')
  return (
	<>
	<div className="flex space-x-2 justify-center items-center h-80  bg-black bg-opacity-15 shadow-xl">
		<div className="flex flex-col">
		<h1 className="font-bold text-4xl mb-20">{"<"}Login{" />"}</h1>
		<label className="font-bold">UserName</label>
		<input className='text-black text-center rounded-md' type="text" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
		 <label className="font-bold">Password</label>
		<input className='text-black text-center rounded-md' type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
		</div>
		<button className='bg-blue-800 p-3 rounded-xl mt-36' onClick={()=>{
			setUser({username,password});
		}}>Submit</button>

	</div>
	</>
  )
}

export default Login