import React, { useState } from 'react'
import UserDataContext from './UserDataContext'


function UserDataContextProvider({children}) {
	const [user,setUser]= useState({});

  return (
	<UserDataContext.Provider value={{user,setUser}}	>
		{children}
	</UserDataContext.Provider>
  )
}

export default UserDataContextProvider