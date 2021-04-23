import React, { useState } from 'react'
import UserForm from './components/Users/UserForm'
import UserList from './components/Users/UserList'

const App = () => {
  const [userList, setUserList] = useState([])

  const formSubmission = (user) => {
    setUserList((prevState) => [...prevState, user])
  }

  return (
    <div>
      <UserForm formSubmit={formSubmission} />
      <UserList userList={userList} />
    </div>
  )
}

export default App
