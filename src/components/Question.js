import React from 'react'

const Question = ({ text, type, visible }) => {
  return (
    visible && (
      <>
        <label htmlFor='name'>{text}</label>
        <input name='name' type={type} />
      </>
    )
  )
}

export default Question
