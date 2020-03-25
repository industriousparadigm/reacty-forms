import React, { useState } from 'react'

const TextInput = ({ question, visible, handleSubmit, value }) => {
  const [answer, setAnswer] = useState(value)
  const [showValidationMessage, toggleValidationMessage] = useState(false)

  const { name, text, type, validationMessage, validate } = question

  const onSubmit = e => {
    e.preventDefault()
    if (validate(answer)) {
      toggleValidationMessage(false)
      handleSubmit(answer)
    } else {
      toggleValidationMessage(true)
    }
  }

  return (
    visible && (
      <>
        <label htmlFor={name}>{text}</label>
        <input
          className='form-input'
          name={name}
          type={type}
          onChange={e => setAnswer(e.target.value)}
          value={answer}
        />
        {showValidationMessage && (
          <p className='validation-message'>{validationMessage}</p>
        )}
        <button className='btn btn-submit' onClick={onSubmit}>
          Submit
        </button>
      </>
    )
  )
}

export default TextInput
