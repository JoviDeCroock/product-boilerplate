const healthTypes = `
  type Ping {
    pong: String!
  }

  type Query {
    ping: Ping
  }
`;

module.exports = healthTypes;
