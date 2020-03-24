import React, { useState } from 'react'

const TextInput = ({ index, question, visible, handleSubmit, value }) => {
  const [answer, setAnswer] = useState(value)
  const [showValidationMessage, toggleValidationMessage] = useState(false)

  const { name, text, type, validationMessage, validate } = question

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
        <button
          className='btn btn-submit'
          onClick={e => {
            e.preventDefault()
            if (validate(answer)) {
              toggleValidationMessage(false)
              handleSubmit(answer, index)
            } else {
              toggleValidationMessage(true)
            }
          }}
        >
          Submit
        </button>
      </>
    )
  )
}

export default TextInput
