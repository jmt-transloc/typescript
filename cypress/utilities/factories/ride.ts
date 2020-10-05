import { Factory } from 'fishery';

const faker = require('faker');

export interface Ride {
  rider?: {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    username: string,
  },
  ride_id?: number | undefined,
  dropoff?: {
    address: string,
    position: {
      latitude: number,
      longitude: number,
    },
    priority: number,
  },
  fare?: number | undefined,
  messages?: string[],
  note?: string | undefined,
  pickup?: {
    address: string,
    position: {
      latitude: number,
      longitude: number,
    },
    priority: number,
  }
  capacity?: number,
  service_id?: string | undefined,
  service_type?: string,
  source?: string,
  status?: string,
  terminal_reason?: string | undefined,
  wheelchair?: boolean,
}

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
