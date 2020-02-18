const healthResolvers = {
  Query: {
    ping: () => ({ pong: 'Dong' }),
  },
};

module.exports = healthResolvers;
