import React from 'react'
import { faAmazon} from '@fortawesome/free-brands-svg-icons'
import { useDispatch } from 'react-redux'
import authObj from '../appWrite/auth'
import { logOut } from '../store/authSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function LogOutButton() {
	const dispatch = useDispatch();
 const logoutHandler =() => {
	 authObj.LogOut().then(() => dispatch(logOut()))
	
 }

  return (
	<button onClick={logoutHandler} className=' bg-purple-700 text-white font-sans font-bold hover:bg-white hover:text-purple-800 border-2
						   hover:border-2 hover:border-black p-4 rounded-2xl'><FontAwesomeIcon icon={faAmazon}/>&nbsp;LogOut</button>
	)
}

export default LogOutButton