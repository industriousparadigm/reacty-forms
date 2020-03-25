import React from 'react'

const TextInput = ({ name, type, onChange, answer }) => {
  return (
    <input
      className='form-input'
      name={name}
      type={type}
      onChange={onChange}
      value={answer}
    />
  )
}

export default TextInput
