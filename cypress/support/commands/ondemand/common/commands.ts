import { buildApiUrl } from '../../../../utilities/helpers/url';

Cypress.Commands.add('cancelRide', ({ rideId }: { rideId: JQuery | string }) => {
  const url: string = buildApiUrl({ path: `/ondemand/imperialdemo/rides/${rideId}` });

  cy.authenticate({
    username: Cypress.env('superuser').username,
    password: Cypress.env('superuser').apiPassword,
  });

  cy.getCookie('transloc_authn_cookie')
    .then((cookie: Cypress.Cookie | null) => {
      cy.request({
        method: 'PATCH',
        url,
        headers: {
          Authorization: `Token ${cookie.value}`,
        },
        body: {
          status: 'canceled',
        },
        retryOnNetworkFailure: true,
      });
    });
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  namespace Cypress {
    interface Chainable {
      /**
       * Cancel a ride via API.
       *
       * @param rideId The ride ID intended for cancellation.
       * @example cy.cancelRide('6657517');
       */
      cancelRide({ rideId }: { rideId: JQuery | string }): Cypress.Chainable
    }
  }
}
