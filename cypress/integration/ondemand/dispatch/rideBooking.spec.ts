import { rideFactory } from '../../../utilities/factories/ride';
import { setSiteUrl } from '../../../utilities/helpers/url';

describe('OnDemand Dispatch Page', () => {
  context('ASAP Ride Booking', () => {
    beforeEach('Set and visit Dispatch URL', () => {
      cy.authenticate({
        username: Cypress.env('superuser').username,
        password: Cypress.env('superuser').apiPassword,
      });

      setSiteUrl({ app: 'ondemand', path: '/admin/imperialdemo/dispatch' });
      const dispatchUrl: string | any = Cypress.config('baseUrl');

      cy.visit(dispatchUrl);
    });

    specify('As a user, I should be able to book an ASAP ride', () => {
      const ride = rideFactory.build();

      cy.get('[data-id=book-a-ride-open]')
        .click();

      cy.fillRideForm({ ride });
    });
  });
});
