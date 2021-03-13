import React, { useEffect } from "react";
import { Grid } from '@material-ui/core';
import { useMutation, useQuery } from "@apollo/client";
import { useHistory } from 'react-router-dom';

import './Login.css';
import { userIDVar } from '../../services';
import { LOGIN, GET_USER_ID } from '../../queries';
import { LoginForm } from '../../components';

function Login() {
  const history = useHistory();
  const { data: { userID } } = useQuery(GET_USER_ID);

  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      localStorage.setItem('token', login.jwt);
      localStorage.setItem('userID', login.user.id);
      userIDVar(login.user.id);
    },
    onError(err) {
      console.error(err);
    }
  });

  useEffect(() => {
    if (userID) {
      history.replace('/');
    }
  }, [userID]);

  return (
    <Grid className="login-page-container" container direction="row" justify="center" alignItems="center">
      <LoginForm
        error={error ? error.message : ''}
        loading={loading}
        onSubmit={variables => login({ variables })}
      />
    </Grid>
  )
}

export default Login;