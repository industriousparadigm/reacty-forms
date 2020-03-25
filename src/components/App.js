import React, { useState } from 'react'
import '../App.css'
import Header from './Header'
import siteData from '../siteData'
import Answers from './Answers'
import Questions from './Questions'
import Navigation from './Navigation'

const buildInitialFormData = () =>
  siteData.questions.map(question => ({
    question,
    value: ''
  }))

const App = () => {
  const [formData, setFormData] = useState(buildInitialFormData())
  const [currentQuestion, goToQuestion] = useState(0)
  const [showAnswers, toggleAnswers] = useState(false)
  const [showEndScreen, toggleEnd] = useState(false)

  const { questions } = siteData

  const handleSave = value => {
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

  const handleDone = () => {
    // check if all answers are good
    // go to final screen
    toggleEnd(true)
  }

  const isLastQuestion = () => currentQuestion + 1 >= questions.length
  const isFirstQuestion = () => currentQuestion === 0

  return (
    <div className='App'>
      <Header />
      <div className='App-content'>
        {showEndScreen ? (
          <h2>the end</h2>
        ) : showAnswers ? (
          <Answers
            formData={formData}
            handleEdit={handleEdit}
            handlePrev={handlePrev}
            handleDone={handleDone}
          />
        ) : (
          <Questions
            formData={formData}
            currentQuestion={currentQuestion}
            handleSave={handleSave}
          />
        )}
        {!showAnswers && (
          <Navigation
            handlePrev={handlePrev}
            handleNext={handleNext}
            handleViewAnswers={() => toggleAnswers(true)}
          />
        )}
      </div>
    </div>
  )
}

export default App
