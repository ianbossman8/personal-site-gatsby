describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/').get('main').injectAxe()
  })
  it.skip('Has no detectable accessibility violations on load', () => {
    cy.checkA11y()
  })
  it('Navigates to page 2 and checks for accessibility violations', () => {
    cy.findByRole('button', { name: /About/i }).click().checkA11y()
  })
})
