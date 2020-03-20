import React, { useState } from 'react'
import '../App.css'
import Header from './Header'
import Question from './Question'
import siteData from '../siteData'

const App = () => {
  const [userData, setUserData] = useState({})
  const [currentQuestion, cycleQuestion] = useState(0)

  return (
    <div className='App'>
      <Header />
      <div className='App-content'>
        <form action=''>
          {siteData.questions.map((q, i) => (
            <Question
              key={i}
              text={q.text}
              type={q.type}
              visible={currentQuestion === i}
            />
          ))}
          <button className='btn btn-submit'>Submit</button>
        </form>
        <button className='btn btn-prev'>Previous</button>
        <button className='btn btn-next'>Next</button>
        <button className='btn btn-summary'>Summary</button>
      </div>
    </div>
  )
}

export default App
