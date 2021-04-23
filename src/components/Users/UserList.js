import React from 'react'
import User from './User'
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UserList = ({ userList }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {userList.map((user, index) => {
          return (
            <li key={index}>
              <User {...user} />
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default UserList
