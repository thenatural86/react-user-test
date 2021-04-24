import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './UserForm.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const UserForm = ({ formSubmit }) => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState()

  const changeUsername = (e) => {
    setUsername(e.target.value)
  }

  const changeAge = (e) => {
    setAge(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()

    if (!username || age <= 0 || age.length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age',
      })
      return
    }
    setUsername('')
    setAge('')
    formSubmit({
      username,
      age,
    })
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}
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
    </>
  )
}

export default UserForm
