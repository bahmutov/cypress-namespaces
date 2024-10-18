declare namespace Cypress {
  interface Chainable {
    add(a: number, b: number): Chainable<number>
  }
}
