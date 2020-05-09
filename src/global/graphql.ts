import { createClient } from '@urql/preact';

const client = createClient({
  url: process.env.API_URL || 'http://test.com',
});

export default client;
