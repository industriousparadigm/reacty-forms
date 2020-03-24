import React from 'react'
import TextInput from './TextInput'
import SelectInput from './SelectInput'

const isTextInput = type => type === 'text' || type === 'email'
const isSelectInput = type => type === 'select'

const Questions = ({ currentQuestion, handleSubmit, formData }) => {
  return (
    <form>
      {formData.map((item, i) => {
        if (isTextInput(item.question.type))
          return (
            <TextInput
              key={i}
              index={i}
              question={item.question}
              value={item.value}
              visible={currentQuestion === i}
              handleSubmit={handleSubmit}
            />
          )

        if (isSelectInput(item.question.type))
          return (
            <SelectInput
              key={i}
              index={i}
              question={item.question}
              value={item.question.options[0]}
              visible={currentQuestion === i}
              handleSubmit={handleSubmit}
            />
          )
        return null
      })}
    </form>
  )
}

export default Questions
