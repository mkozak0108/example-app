import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_ID } from './queries';

export default function PrivateRoute({ children, ...rest }) {
  const { data: { userID } } = useQuery(GET_USER_ID);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userID ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}