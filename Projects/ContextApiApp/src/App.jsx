import UserDataContextProvider from './context/userDataContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserDataContextProvider>
     <h1 className="bg-blue-700 text-white font-bold h-20 text-center p-5 text-4xl"> Hi Welcome to Context Api App</h1><br></br>
     <Login/>
     <br></br>
     <Profile/>
    </UserDataContextProvider>
  )
}

export default App
