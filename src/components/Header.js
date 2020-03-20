import React from 'react'
import siteData from '../siteData'

const Header = () => {
  return (
    <header className='App-header'>
      <h1>{siteData.title}</h1>
    </header>
  )
}

export default Header
