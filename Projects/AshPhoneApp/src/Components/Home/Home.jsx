import { faBuyNLarge } from '@fortawesome/free-brands-svg-icons'
import { faCarTunnel, faCartShopping, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { RouterProvider } from 'react-router-dom'

function Home() {
  return (
	<div className='flex justify-center items-center'>
		<img src="https://www.shutterstock.com/image-photo/cellphone-phone4-smart-phone-advertisement-600nw-2255695631.jpg"></img>
		<div>
		<h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nisi cum nobis quas corrupti, labore neque natus dolores voluptates repellendus commodi aspernatur dicta reiciendis repudiandae adipisci tempora necessitatibus veniam. Velit dolorem dolorum quam architecto?</h1>
		<button className='my-7 bg-orange-700 text-white font-sans font-bold hover:bg-white hover:text-orange-700 border-2
						   hover:border-2 hover:border-black p-4 rounded-2xl'><FontAwesomeIcon icon={faCreditCard}/>&nbsp;Buy Now</button>
		<button className='my-7 mx-4 bg-orange-700 text-white font-sans font-bold hover:bg-white hover:text-orange-700 border-2
						   hover:border-2 hover:border-black p-4 rounded-2xl'><FontAwesomeIcon icon={faCartShopping}/>&nbsp;Add To Cart</button>
		
		</div>
	</div>
  )
}

export default Home