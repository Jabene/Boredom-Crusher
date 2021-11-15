describe('Header', () => {

  beforeEach(() => {
    cy.intercept('https://bored-crusher.herokuapp.com/log-in/benefield.joshua@gmail.com/password', {
      body: [{
        id: 1,
        first_name: 'Joshua',
        last_name: 'Benefield'
      }]
    })
    cy.intercept('https://www.boredapi.com/api/activity/', {
      body: {
        activity: 'Complete Cypress Testing',
        type: 'Test',
        link: ''
      }
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should show you a activity', () => {
    cy.get('.bored-btn').first().click()
    cy.url().should('include', '/newActivity')
    cy.get('h2').should('have.text', 'Test')
    cy.get('h3').should('have.text', 'Complete Cypress Testing')
  })

  it('Should be able to return home', () => {
    cy.get('.bored-btn').first().click()
    cy.get('.nav-btn').first().click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should be able to log in and see saved activities', () => {
    cy.get('.login-btns').eq(1).click()
    cy.get('.log-in-input').first().type('benefield.joshua@gmail.com')
    cy.get('.log-in-input').eq(1).type('password')
    cy.get('.log-in-submit').click()
    cy.get('.welcome-message').should('have.text', 'Welcome Joshua')
    cy.get('.nav-btn').eq(1).click()
    cy.url().should('include', '/savedActivities')
  })

  it('Should be able to log out', () => {
    cy.get('.login-btns').eq(1).click()
    cy.get('.log-in-input').first().type('benefield.joshua@gmail.com')
    cy.get('.log-in-input').eq(1).type('password')
    cy.get('.log-in-submit').click()
    cy.get('.welcome-message').should('have.text', 'Welcome Joshua')
    cy.get('.nav-btn').eq(2).click()
    cy.get('.welcome-messge').should('not.exist')
  })

  it('should be able to save a activity', () => {
    cy.get('.login-btns').eq(1).click()
    cy.get('.log-in-input').first().type('benefield.joshua@gmail.com')
    cy.get('.log-in-input').eq(1).type('password')
    cy.get('.log-in-submit').click()
    cy.get('.bored-btn').first().click()
    cy.get('.save-btn').click()
    cy.get('.saved-message').should('exist')
  })

})
