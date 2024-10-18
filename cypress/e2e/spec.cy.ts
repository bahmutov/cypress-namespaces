it('uses the custom command add', () => {
  cy.add(2, 3).should('equal', 5)
})
