import React from 'react'

const Summary = ({ formData, handleEdit }) => {
  return (
    <div>
      <h2>Your answers</h2>
      {formData.map((item, i) => (
        <div className='answers' key={i}>
          <p>
            <button
              className='btn btn-small btn-edit'
              onClick={() => handleEdit(i)}
            >
              edit
            </button>
            {item.question.name}: {item.value || 'n/a'}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Summary
