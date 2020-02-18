const healthResolvers = {
  Query: {
    ping: () => ({ pong: 'Healthy' }),
  },
};

module.exports = healthResolvers;
