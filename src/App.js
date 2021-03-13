import React  from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { Home, Login, Logout } from './pages'
import { apolloClient } from './services';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/logout">
          <Logout/>
        </Route>
        <PrivateRoute exact path="/">
          <Home/>
        </PrivateRoute>
      </Switch>
    </ApolloProvider>
  );
}

export default App;
