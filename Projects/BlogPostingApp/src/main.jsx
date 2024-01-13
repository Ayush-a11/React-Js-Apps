import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import Login from './components/Login.jsx'
import SignUp from './components/SingUp.jsx'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Posting from './components/Posting/Posting.jsx'
const AppRouter = createBrowserRouter(createRoutesFromElements(
    
   <Route path='/' element={<App/>}>
    <Route path='Login' element={<Login/>}/>
    <Route path='SignUp' element={<SignUp/>}/>
    <Route path='Post' element={<Posting/>}/>
   </Route>
  
)
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={AppRouter}/>
    </Provider>
  </React.StrictMode>,
)
