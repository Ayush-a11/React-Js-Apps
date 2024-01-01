import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import AboutUs, { githubAPi } from './Components/AboutUs/AboutUs.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'

const numberId=100;
const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>} >

    <Route path='' element={<Home/>} />
    <Route path='AboutUs' element={<AboutUs/>} />
    <Route 
      // loader={() =>{
      //   fetch('https://api.github.com/users/Ayush-a11').then((res)=>res.json());
      // }}
      path='ContactUs/:numberId'  element={<ContactUs/>} />
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={AppRouter}/>
  </React.StrictMode>,
)
