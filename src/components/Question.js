import React, { useState } from 'react'
import TextInput from './TextInput'
import SelectInput from './SelectInput'

const Question = ({
  question,
  number,
  totalQuestions,
  visible,
  handleSave,
  value
}) => {
  const [answer, setAnswer] = useState(value)
  const [showValidationMessage, toggleValidationMessage] = useState(false)

  const { name, text, type, options, validationMessage, validate } = question

  const onSave = e => {
    e.preventDefault()
    if (validate(answer)) {
      toggleValidationMessage(false)
      handleSave(answer)
    } else {
      toggleValidationMessage(true)
    }
  }

  const onChange = e => setAnswer(e.target.value)
  const isTextInput = () => type === 'text' || type === 'email'
  const isSelectInput = () => type === 'select'

  return (
    visible && (
      <>
        <label htmlFor={name}>{`${text} ${number} of ${totalQuestions}`}</label>
        {isTextInput(type) && (
          <TextInput
            name={name}
            type={type}
            onChange={onChange}
            answer={answer}
          />
        )}
        {isSelectInput(type) && (
          <SelectInput
            name={name}
            onChange={onChange}
            options={options}
            answer={answer}
          />
        )}
        {showValidationMessage && (
          <p className='validation-message'>{validationMessage}</p>
        )}
        <button className='btn btn-submit' onClick={onSave}>
          Save
        </button>
      </>
    )
  )
}

export default Question
