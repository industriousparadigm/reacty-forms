import React from 'react'
import Question from './Question'

const Questions = ({ currentQuestion, handleSave, formData }) => {
  return (
    <form data-testid='form'>
      {formData.map((item, i) => (
        <Question
          key={i}
          number={i + 1}
          question={item.question}
          value={item.value}
          visible={currentQuestion === i}
          totalQuestions={formData.length}
          handleSave={handleSave}
        />
      ))}
    </form>
  )
}

export default Questions
