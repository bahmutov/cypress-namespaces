declare namespace Cypress {
  /**
   * Custom command type for adding two numbers
   * and yielding the sum
   */
  type addFn = (a: number, b: number) => Chainable<number>

  interface Chainable {
    /**
     * Custom command for adding two numbers
     */
    add: addFn
  }
}
