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
  const [currentQuestion, goToQuestion] = useState(0)
  const [showAnswers, toggleAnswers] = useState(false)

  const { questions } = siteData

  const handleSubmit = value => {
    let updatedFormData = formData
    updatedFormData[currentQuestion] = { ...formData[currentQuestion], value }
    setFormData(updatedFormData)
    handleNext()
  }

  const handleEdit = questionIndex => {
    // set currentQuestion to the relevant one and take answers away
    goToQuestion(questionIndex)
    toggleAnswers(false)
  }

  const handlePrev = () => {
    // if currently viewing summary go back to current Q
    showAnswers
      ? toggleAnswers(false)
      : !isFirstQuestion() && goToQuestion(currentQuestion - 1)
  }

  const handleNext = () =>
    // show summary if no more questions
    isLastQuestion() ? toggleAnswers(true) : goToQuestion(currentQuestion + 1)

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
