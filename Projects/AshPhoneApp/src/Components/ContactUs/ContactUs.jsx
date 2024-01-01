import React from 'react'
import { useParams } from 'react-router-dom'

function ContactUs() {
  const {numberId} = useParams()
  return (
    <div className='flex justify-center items-center my-14 flex-col w-ful h-40  bg-white border-1 border-gray-900
    shadow-2xl '>
        <h1>Number is {numberId} </h1>
      </div>
  )
}

export default ContactUs