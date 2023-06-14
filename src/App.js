import React from 'react'
import Login from './Component/Login'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import Logout from './Component/Logout'

const App = () => {
  const user=useSelector(selectUser)
  return (
    <div>
      {user?<Logout/>:<Login/>}
    </div>
  )
}

export default App

