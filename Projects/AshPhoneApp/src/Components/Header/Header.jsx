import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {

  return (
	<div className="flex flex-row justify-end items-center w-full font-bold border-b-2 "> 
    <div className="flex items-center">
      <h1 className="text-3xl font-serif text-black ">Ace Phone</h1>
        <img className="px-4 h-16" src="https://img.freepik.com/free-vector/ace-spades-playing-card-isolated_1308-78891.jpg?w=360&t=st=1703922421~exp=1703923021~hmac=19bc53326579749a5c57b9b4cc6e5e5d30a3e30b5d998fd4bbbb62f6308473f2" alt="Logo" />
      </div>
    <ul className="flex flex-row space-x-6">
      <li className="font-bold font-serif text-xl">
        <NavLink to="/" className={({isActive})=>{ isActive?"text-blue-800":"text-gray-700"}}>Home</NavLink>
      </li>
      <li className="font-bold font-serif text-xl">
        <NavLink to="/AboutUs" className={({isActive})=>{ isActive?"text-blue-800":"text-gray-700"}}>About-Us</NavLink>
      </li>
      <li className="font-bold  font-serif text-xl">di
        <NavLink to="/ContactUs" className={(isActive)=>{ !isActive?"text-blue-800":"text-gray-700"}}>Contact-Us</NavLink>
      </li>
    </ul>
    <button className=' ml-10 my-7 bg-orange-700 text-white font-sans font-bold hover:bg-white hover:text-orange-700 border-2
						   hover:border-2 hover:border-black p-4 rounded-2xl'><FontAwesomeIcon icon={faUser}/>&nbsp;Login</button>
		<button className='my-7 mx-4 bg-orange-700 text-white font-sans font-bold hover:bg-white hover:text-orange-700 border-2
						   hover:border-2 hover:border-black p-4 rounded-2xl'><FontAwesomeIcon icon={faUserPlus}/>&nbsp;SignIn</button>
		
  </div>
  )
}

export default Header