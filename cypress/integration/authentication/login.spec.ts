describe('TransLoc Authentication', () => {
  context('Application Login', () => {
    specify('As a user, I should be able to login', () => {
      const url: string | any = Cypress.config('baseUrl');

      cy.visit(url);

      cy.get('#username')
        .type(Cypress.env('superuser').username);

      cy.get('#password')
        .type(Cypress.env('superuser').password);

      cy.get('[data-id=submit-login-button]')
        .click();

      cy.url()
        .should('eq', `${url}/`);
    });
  });
});
