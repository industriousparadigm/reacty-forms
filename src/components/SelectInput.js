import React, { useState } from 'react'

const SelectInput = ({ index, question, visible, handleSubmit, value }) => {
  const [answer, setAnswer] = useState(value)
  const [showValidationMessage, toggleValidationMessage] = useState(false)

  const { name, text, options } = question

  const onSubmit = e => {
    e.preventDefault()
    handleSubmit(answer, index)
  }

  return (
    visible && (
      <>
        <label htmlFor={name}>{text}</label>
        <select
          className='form-input form-select'
          name={name}
          onChange={e => setAnswer(e.target.value)}
        >
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button className='btn btn-submit' onClick={onSubmit}>
          Submit
        </button>
      </>
    )
  )
}

export default SelectInput
