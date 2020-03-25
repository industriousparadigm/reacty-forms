import React from 'react'
import { render } from '@testing-library/react'
import siteData from '../siteData'
import App from './App'

const renderComp = () => render(<App />)

describe('<App />', () => {
  it('renders a Stylist Forms page', () => {
    const { getByText } = renderComp()
    const siteTitle = getByText(siteData.title)
    expect(siteTitle).toBeInTheDocument()
  })

  it('includes a form element', () => {
    const { getByTestId } = renderComp()
    const form = getByTestId('form')
    expect(form).toBeInTheDocument()
  })
})
