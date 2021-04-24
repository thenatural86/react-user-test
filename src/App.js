import React, { useState } from 'react'
import UserForm from './components/Users/UserForm'
import UserList from './components/Users/UserList'

const App = () => {
  const [userList, setUserList] = useState([])

  const formSubmission = (user) => {
    setUserList((prevState) => [user, ...prevState])
  }

  return (
    <>
      <UserForm formSubmit={formSubmission} />
      <UserList userList={userList} />
    </>
  )
}

export default App
