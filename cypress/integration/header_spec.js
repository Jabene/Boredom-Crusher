describe('Header', () => {

  beforeEach(() => {
    cy.intercept('https://bored-crusher.herokuapp.com/log-in/benefield.joshua@gmail.com/password', {
      body: [{
        id: 1,
        first_name: 'Joshua',
        last_name: 'Benefield'
      }]
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should have links that take you to sign up and log in', () => {
    cy.get('.site-title').should('have.text', 'Boredom Crusher')

    cy.get('.login-btns').first().click()
    cy.url().should('include', '/signUp')

    cy.get('.login-btns').eq(1).click()
    cy.url().should('include', '/logIn')

    cy.get('.log-in-input').first().type('benefield.joshua@gmail.com')
    cy.get('.log-in-input').eq(1).type('password')
    cy.get('.log-in-submit').click()
    cy.get('.welcome-message').should('have.text', 'Welcome Joshua')

  })

})
