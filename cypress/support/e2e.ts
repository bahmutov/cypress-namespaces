Cypress.Commands.add('add', (a: number, b: number) => {
  expect(a, 'a').to.be.a('number')
  expect(b, 'b').to.be.a('number')
  return cy.wrap(a + b, { log: false })
})
