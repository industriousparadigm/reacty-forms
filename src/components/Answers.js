import React, { useState } from 'react'
import siteData from '../siteData'

const Answers = ({ formData, handleEdit, handlePrev, handleDone }) => {
  const [showEnd, toggleEnd] = useState(false)
  const [showValidationMessage, toggleValidationMessage] = useState(false)

  handleDone = () => {
    // check if answers are good
    let allClear = true
    formData.forEach(item => {
      if (!item.question.validate(item.value)) {
        toggleValidationMessage(true)
        allClear = false
      }
    })
    // show thank you
    allClear && toggleEnd(true)
  }

  return (
    <div id='answers'>
      <h2>{showEnd ? 'Thank you!' : 'Your answers'}</h2>
      {!showEnd && (
        <>
          {formData.map((item, i) => (
            <p className={`answer ${!item.value ? 'bad-answer' : ''}`} key={i}>
              <button
                className='btn btn-small btn-edit'
                onClick={() => handleEdit(i)}
              >
                edit
              </button>
              {item.question.name}: {item.value || 'n/a'}
            </p>
          ))}
          {showValidationMessage && (
            <p className='validation-message'>
              {siteData.globalValidationMessage}
            </p>
          )}
          <button className='btn btn-small btn-summary' onClick={handlePrev}>
            Back
          </button>
          <button className='btn btn-small btn-summary' onClick={handleDone}>
            Done!
          </button>
        </>
      )}
    </div>
  )
}

export default Answers
