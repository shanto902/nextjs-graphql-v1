import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://api.nextwheel.co/graphql', // Replace with your GraphQL API endpoint
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`, // Replace with your Bearer Token
    'Content-Type': 'application/json', // Add the Content-Type header
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
