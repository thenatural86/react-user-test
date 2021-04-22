import React from 'react'
import User from './User'

const UserList = ({ userList }) => {
  console.log(userList)

  return (
    <div>
      {userList.map((user, index) => {
        return (
          <div key={index}>
            <User {...user} />
          </div>
        )
      })}
    </div>
  )
}

export default UserList
