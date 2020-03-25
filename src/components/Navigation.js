import React from 'react'

const Navigation = ({ handlePrev, handleNext, handleViewAnswers }) => (
  <>
    <button className='btn btn-small btn-prev' onClick={handlePrev}>
      {'<'}
    </button>
    <button className='btn btn-small btn-next' onClick={handleNext}>
      {'>'}
    </button>
    <button className='btn btn-small btn-summary' onClick={handleViewAnswers}>
      View Answers
    </button>
  </>
)

export default Navigation
