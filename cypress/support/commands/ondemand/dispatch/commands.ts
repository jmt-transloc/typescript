import { RideForm } from '../../../interfaces/ondemand/interfaces';

Cypress.Commands.add('fillRideForm', ({ ride }: RideForm): void => {
  cy.get('[name=serviceId]')
    .select(ride.service_id);

  cy.get('[name=pickup]')
    .type(ride.pickup.address)
    .get('[data-id=places-autocomplete-suggestion]')
    .click();

  cy.get('[name=dropoff]')
    .type(ride.dropoff.address)
    .get('[data-id=places-autocomplete-suggestion]')
    .click();

  cy.get('[name=capacity]')
    .type('{selectall}')
    .type(ride.capacity.toString());

  if (ride.wheelchair === true) {
    cy.get('[name=wheelchair]')
      .check();
  }

  cy.get('[name=first_name]')
    .type(ride.rider.first_name);

  cy.get('[name=last_name]')
    .type(ride.rider.last_name);

  cy.get('[name=phone]')
    .type(ride.rider.phone);
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Fill out an OnDemand Dispatch ride form.
       *
       * @param ride A ride object provided by a Factory.
       * @example const ride = rideFactory.build()
       *          cy.fillRideForm({ ride })
       */
      fillRideForm({ ride }: RideForm): void
    }
  }
}
