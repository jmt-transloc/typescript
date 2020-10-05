interface RideForm {
  ride: {
    rider: {
      first_name: string,
      last_name: string,
      email: string,
      phone: string,
      username: string,
    },
    dropoff: {
      address: string,
    },
    note: string | undefined,
    pickup: {
      address: string,
    }
    capacity: string,
    service_id: string | any,
    wheelchair: boolean,
  }
}

Cypress.Commands.add('fillRideForm', ({ ride }: RideForm): void => {
  cy.get('[name=serviceId]')
    .select(ride.service_id);

  cy.get('[name=pickup]')
    .type(ride.pickup.address);

  cy.get('[name=dropoff]')
    .type(ride.dropoff.address);

  cy.get('[name=capacity]')
    .type('{selectall}')
    .type(ride.capacity);

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
