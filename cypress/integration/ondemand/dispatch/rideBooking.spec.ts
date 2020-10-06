import { Ride } from '../../../support/interfaces/ondemand/interfaces';
import { rideFactory } from '../../../utilities/factories/ondemand/ride';
import { setSiteUrl } from '../../../utilities/helpers/url';

describe('OnDemand Dispatch Page', () => {
  context('ASAP Ride Booking', () => {
    before('Set and visit Dispatch URL', () => {
      cy.authenticate({
        username: Cypress.env('superuser').username,
        password: Cypress.env('superuser').apiPassword,
      });

      setSiteUrl({ app: 'ondemand', path: '/admin/imperialdemo/dispatch' });
      const dispatchUrl: string | any = Cypress.config('baseUrl');

      cy.visit(dispatchUrl);
    });

    specify('As a user, I should be able to book an ASAP ride', () => {
      const ride: Ride = rideFactory.build();
      const riderName: string = `${ride.rider.first_name} ${ride.rider.last_name}`;

      cy.get('[data-id=book-a-ride-open]')
        .click();

      cy.fillRideForm({ ride });

      cy.get('[data-id=book-ride-button]')
        .click();

      cy.get('[data-id=ride-card-container]')
        .contains('[data-id=ride-card]', riderName)
        .as('rideCard')
        .should('be.visible');
    });

    after('Clean up application state', () => {
      cy.get('@rideCard')
        .find('[data-id=ride-card-ride-id]')
        .invoke('text')
        .as('rideId');

      cy.get('@rideId')
        .then((rideId: JQuery) => {
          cy.cancelRide({ rideId })
            .then((response: Cypress.Response) => {
              expect(response.status).to.equal(200);
            });
        });
    });
  });
});
