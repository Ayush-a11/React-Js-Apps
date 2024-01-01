import { faDiscord, faGit, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
	<div className=" flex  h-40 w-full items-center justify-center bg-orange-700 text-white font-bold font-sans
  ">
    <ul className="flex flex-col mx-10 text-left">
      <li>authorship information</li>
      <li>  copyright information</li>
      <li>contact information</li>
    </ul>
    <ul className="flex flex-col mx-10 text-left  ">
    <li>sitemap</li>
      <li>back to top links</li>
      <li>    related documents</li>
    </ul>
    <button className=' ml-10 my-7 h-11 pb-9 bg-orange-700 text-white font-sans font-bold hover:bg-white hover:text-orange-700 border-2
						   hover:border-2 hover:border-black p-4 rounded-2xl'><FontAwesomeIcon icon={faDiscord}/></button>
		<button className='my-7 mx-4 h-12 pb-9 bg-orange-700 text-white font-sans font-bold hover:bg-white hover:text-orange-700 border-2
						   hover:border-2 hover:border-black p-4 rounded-2xl'><FontAwesomeIcon icon={faInstagram} /></button>
    <button className=' ml-10 my-7 h-12 pb-9 bg-orange-700 text-white font-sans font-bold hover:bg-white hover:text-orange-700 border-2
						   hover:border-2 hover:border-black p-4 rounded-2xl'><FontAwesomeIcon icon={faTwitter} /></button>
		<button className='my-7 mx-4 h-12 pb-9 bg-orange-700 text-white font-sans font-bold hover:bg-white hover:text-orange-700 border-2
						   hover:border-2 hover:border-black p-4 rounded-2xl'><FontAwesomeIcon icon={faGit} /></button>
		
  </div>
  )
}

export default Footer