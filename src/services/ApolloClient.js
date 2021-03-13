import {
  ApolloClient,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import apolloCache from './ApolloCache';
import { BACKEND_URL } from '../constants';

const httpLink = createHttpLink({
  uri: BACKEND_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export default new ApolloClient({
  cache: apolloCache,
  link: authLink.concat(httpLink),
});

