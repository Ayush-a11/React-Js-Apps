import React, { useContext } from 'react'
import userDataContext from '../context/UserDataContext'


function Profile() {
	const {user}=useContext(userDataContext);
  return (
	<div className="flex flex-col space-x-2 justify-center items-center h-80  bg-black bg-opacity-15 shadow-xl">
		<h1 className="font-bold text-4xl mb-10">{"<"}Profile{" />"}</h1>
		<h1 className="font-bold"> Username is {user.username}</h1>
		<br></br>
		<h1 className="font-bold">Password is {user.password}</h1>

	</div>
  )
}

export default Profile