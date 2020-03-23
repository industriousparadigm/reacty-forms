import React, { useState } from 'react'
import '../App.css'
import Header from './Header'
import Question from './Question'
import siteData from '../siteData'

const App = () => {
  const [formData, setFormData] = useState([])
  const [currentQuestion, cycleQuestion] = useState(0)

  const handleSubmit = (e, value, index) => {
    e.preventDefault()
    let updatedFormData = formData
    updatedFormData[index] = value
    setFormData(updatedFormData)
    console.log(updatedFormData)
  }

  return (
    <div className='App'>
      <Header />
      <div className='App-content'>
        <form action=''>
          {siteData.questions.map((q, i) => (
            <Question
              key={i}
              index={i}
              text={q.text}
              type={q.type}
              visible={currentQuestion === i}
              handleSubmit={handleSubmit}
              value={formData[i]}
            />
          ))}
        </form>
        <button className='btn btn-prev'>Previous</button>
        <button className='btn btn-next'>Next</button>
        <button className='btn btn-summary'>Summary</button>
      </div>
    </div>
  )
}

export default App
