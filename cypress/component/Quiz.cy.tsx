import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
  })
})

describe('Start button', () => {
  it('should show a Start Quiz button', () => {
    cy.mount(<Quiz />)
    cy.get('.btn').should('contain.text', 'Start Quiz')
  })
  it('should proceed to a question when clicked', () => {
    cy.mount(<Quiz />)
    cy.get('.btn').click()
    cy.get('h2').should('contain.text', '?')
  })
})