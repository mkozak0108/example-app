import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import { ApolloProvider, useQuery } from '@apollo/client';

import { Home, Login, Logout } from './pages'
import { apolloClient } from './services';
import { GET_USER_ID } from './queries';

function App() {
  const { data: { userID } } = useQuery(GET_USER_ID, { client: apolloClient });
  const history = useHistory();

  useEffect(() => {
    history.replace(userID ? '/' : '/login');
  }, [userID, history]);

  return (
    <ApolloProvider client={apolloClient}>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/logout">
          <Logout/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </ApolloProvider>
  );
}

export default App;
