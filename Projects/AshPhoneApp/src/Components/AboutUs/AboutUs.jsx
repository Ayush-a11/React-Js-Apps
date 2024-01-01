import React, { useEffect, useState } from 'react'
import { useLoaderData  } from 'react-router-dom'

function AboutUs() {
  const [Data,setData]=useState({});
  useEffect(()=>{
     fetch('https://api.github.com/users/Ayush-a11').
      then((res)=> res.json()).
      then((res)=> setData(res));

  },[])
  const data=useLoaderData()
  console.log(data);
  return (
	<div className='flex justify-center items-center my-14 flex-col   bg-white border-1 border-gray-900
                shadow-2xl '>
      <img className='rounded-full w-40 h-40 my-4 shadow-lg' src={Data.avatar_url?Data.avatar_url:'alt'}>
      </img>
      <table className='my-10'>
      <th>
        <tr>Name</tr>
        <tr>Username</tr>
        <tr>Followers</tr>
        <tr>Following</tr>
      </th>
      <td>
        <tr>{Data.name}</tr>
        <tr>{Data.login}</tr>
        <tr>{Data.followers}</tr>
        <tr>{Data.following}</tr>
      </td>
      </table> 

  </div>
  )
}

export default AboutUs


export const  githubAPi= async ()=>{
  const resp= await fetch('https://api.github.com/users/Ayush-a11')
  return resp.json()
    
} 