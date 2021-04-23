import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './UserForm.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const UserForm = ({ formSubmit }) => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')

  const changeUsername = (e) => {
    setUsername(e.target.value)
  }

  const changeAge = (e) => {
    setAge(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (!username || age <= 0 || age.length === 0) {
      return
    }
    setUsername('')
    setAge('')
    formSubmit({
      username,
      age,
    })
  }

  return (
    <div>
      <ErrorModal title='An error occured!' message='Something went wrong!' />
      <Card className={classes.input}>
        <form className='input' onSubmit={submitForm}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={username}
            onChange={changeUsername}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' value={age} onChange={changeAge} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default UserForm
