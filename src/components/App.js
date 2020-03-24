import React, { useState } from 'react'
import '../App.css'
import Header from './Header'
import siteData from '../siteData'
import Answers from './Answers'
import Questions from './Questions'

const buildInitialFormData = () =>
  siteData.questions.map(question => ({
    question,
    value: ''
  }))

const App = () => {
  const [formData, setFormData] = useState(buildInitialFormData())
  const [currentQuestion, cycleQuestion] = useState(0)
  const [showAnswers, toggleAnswers] = useState(false)

  const { questions } = siteData

  const handleSubmit = (value, index) => {
    let updatedFormData = formData
    updatedFormData[index] = { question: questions[currentQuestion], value }
    setFormData(updatedFormData)
    console.log(updatedFormData)
    handleNext()
  }

  const handleEdit = questionIndex => {
    // set currentQuestion to the relevant one and take answers away
    cycleQuestion(questionIndex)
    toggleAnswers(false)
  }

  const handlePrev = () => {
    // if currently viewing summary just go back to current Q
    showAnswers
      ? toggleAnswers(false)
      : !isFirstQuestion() && cycleQuestion(currentQuestion - 1)
  }

  const handleNext = () =>
    // just show summary if no more questions
    isLastQuestion() ? toggleAnswers(true) : cycleQuestion(currentQuestion + 1)

  const isLastQuestion = () => currentQuestion + 1 >= questions.length
  const isFirstQuestion = () => currentQuestion === 0

  return (
    <div className='App'>
      <Header />
      <div className='App-content'>
        {showAnswers ? (
          <Answers formData={formData} handleEdit={handleEdit} />
        ) : (
          <Questions
            formData={formData}
            currentQuestion={currentQuestion}
            handleSubmit={handleSubmit}
          />
        )}
        {!showAnswers && (
          <>
            <button className='btn btn-small btn-prev' onClick={handlePrev}>
              Previous
            </button>
            <button className='btn btn-small btn-next' onClick={handleNext}>
              Next
            </button>
          </>
        )}
        <button
          className='btn btn-small btn-summary'
          onClick={() => {
            showAnswers ? handlePrev() : toggleAnswers(true)
          }}
        >
          {showAnswers ? 'Back' : 'View answers'}
        </button>
      </div>
    </div>
  )
}

export default App
