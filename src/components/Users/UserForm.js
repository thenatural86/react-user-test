import React, { useState } from 'react'
import './UserForm.css'
import Card from '../UI/Card'

const UserForm = ({ formSubmit }) => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')

  const changeUsername = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value)
  }

  const changeAge = (e) => {
    setAge(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    setUsername('')
    setAge('')
    formSubmit({
      username,
      age,
    })
  }

  return (
    <Card>
      <form className='form-control' onSubmit={submitForm}>
        <label htmlFor='username' className='form-control__label'>
          Username
        </label>
        <input
          id='username'
          className='form-control__input'
          type='text'
          value={username}
          onChange={changeUsername}
        />
        <label htmlFor='age' className='form-control__label'>
          Age (Years)
        </label>
        <input
          id='age'
          className='form-control__input'
          type='text'
          value={age}
          onChange={changeAge}
        />
        <button>Add User</button>
      </form>
    </Card>
  )
}

export default UserForm