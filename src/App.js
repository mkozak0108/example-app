import React  from 'react';
import { ErrorBoundary } from 'react-error-boundary'
import {
  Switch,
  Route
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { Home, Login, Logout } from './pages'
import { apolloClient } from './services';
import PrivateRoute from './PrivateRoute';
import ErrorFallback from './ErrorFallback'

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
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
    </ErrorBoundary>
  );
}

export default App;
