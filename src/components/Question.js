import React, { useState } from 'react'

const Question = ({ index, text, type, visible, handleSubmit }) => {
  const [answer, setAnswer] = useState(null)
  return (
    visible && (
      <>
        <label htmlFor='name'>{text}</label>
        <input
          name='name'
          type={type}
          onChange={e => setAnswer(e.target.value)}
        />
        <button
          className='btn btn-submit'
          onClick={e => handleSubmit(e, answer, index)}
        >
          Submit
        </button>
      </>
    )
  )
}

export default Question
