export default {
  routes: [
    {
      method: 'GET',
      path: '/my-bookings',
      handler: 'my-booking.findMyBookings',
      config: {
        auth: {},
      },
    },
  ],
};
