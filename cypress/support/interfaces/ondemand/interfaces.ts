export interface Ride {
  rider: {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    username: string,
  },
  ride_id: number | undefined,
  dropoff: {
    address: string,
    position: {
      latitude: number,
      longitude: number,
    },
    priority: number,
  },
  fare: number | undefined,
  messages: string[],
  note: string | undefined,
  pickup: {
    address: string,
    position: {
      latitude: number,
      longitude: number,
    },
    priority: number,
  }
  capacity: number,
  service_id: string | undefined,
  service_type: string,
  source: string,
  status: string,
  terminal_reason: string | undefined,
  wheelchair: boolean,
}

export interface RideForm {
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
    capacity: number,
    service_id: string | any,
    wheelchair: boolean,
  }
}
