import type { Context } from 'koa';

export default {
  async findMyBookings(ctx: Context) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized('You must be logged in to view your bookings.');
    }

    const bookings = await strapi.documents('api::booking.booking').findMany({
      filters: {
        user: {
          id: {
            $eq: user.id,
          },
        },
      },
      populate: ['*'],
    });

    ctx.body = bookings;
  },
};
