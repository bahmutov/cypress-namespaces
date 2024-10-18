declare namespace Cypress {
  /**
   * Custom command type for adding two numbers
   * and yielding the sum
   */
  type addFn = (a: number, b: number) => Chainable<number>

  interface Chainable {
    /**
     * Custom commands for doing math operations
     */
    math: {
      /**
       * Add two numbers
       * @example cy.math.add(2, 3).should('equal', 5)
       */
      add: addFn
    }

    /**
     * Custom command for adding two numbers
     * @deprecated Use `cy.math.add` instead
     */
    add: addFn
  }
}
