import './commands';
import './commands/ondemand/commands';

declare global {
  namespace Cypress {
    interface Chainable {
      authenticate({ username, password }: {username: string, password: string}): Cypress.Chainable
      fillRideForm(ride: object): Cypress.Chainable
    }
  }
}
