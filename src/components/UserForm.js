import React, { useState } from 'react'
import './UserForm.css'

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
    <div>
      <form className='form-control' onSubmit={submitForm}>
        <label className='form-control__label'>Username</label>
        <input
          className='form-control__input'
          type='text'
          value={username}
          onChange={changeUsername}
        />
        <label className='form-control__label'>Age (Years)</label>
        <input
          className='form-control__input'
          type='text'
          value={age}
          onChange={changeAge}
        />
        <button>Add User</button>
      </form>
    </div>
  )
}

export default UserForm
