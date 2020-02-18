import { createClient } from '@urql/preact';

const client = createClient({
  url: process.env.API_URL as string,
});

export default client;
