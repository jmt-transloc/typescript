import { Factory } from 'fishery';

import { Ride } from '../../../support/interfaces/ondemand/interfaces';

const faker = require('faker');

class RideFactory extends Factory<Ride> {
  rideWithNote() {
    return this.params({
      note: faker.lorem.word(),
    });
  }
}

export const rideFactory = RideFactory.define(() => ({
  rider: {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    username: faker.internet.userName(),
  },
  ride_id: undefined,
  dropoff: {
    address: '4507 South Miami Boulevard Durham, NC, USA',
    position: {
      latitude: 35.9015672,
      longitude: -78.851133,
    },
    priority: 0,
  },
  fare: undefined,
  messages: [],
  note: undefined,
  pickup: {
    address: '4506 Emperor Boulevard Durham, NC, USA',
    position: {
      latitude: 35.8724046,
      longitude: -78.8426551,
    },
    priority: 0,
  },
  capacity: 1,
  service_id: '717',
  service_type: 'ondemand',
  source: 'dispatcher',
  status: 'pending',
  terminal_reason: undefined,
  wheelchair: false,
}));
