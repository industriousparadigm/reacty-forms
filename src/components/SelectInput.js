import React from 'react'

const SelectInput = ({ name, onChange, options, answer }) => {
  return (
    <select
      className='form-input form-select'
      name={name}
      onChange={onChange}
      value={answer}
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default SelectInput
