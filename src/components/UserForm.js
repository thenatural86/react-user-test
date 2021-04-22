import React, { useState } from 'react'
import './UserForm.css'

const UserForm = () => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')

  const changeUsername = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>
      <form className='form-control'>
        <label className='form-control__label'>Username</label>
        <input
          className='form-control__input'
          type='text'
          value={username}
          onChange={changeUsername}
        />
        <label className='form-control__label'>Age (Years)</label>
        <input className='form-control__input' type='text' value={age} />
        <button>Add User</button>
      </form>
    </div>
  )
}

export default UserForm
