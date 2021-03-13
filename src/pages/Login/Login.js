import React from "react";
import { useMutation } from "@apollo/client";

import { userIDVar } from '../../services';
import { LOGIN } from '../../queries';
import { LoginForm } from '../../components';

function Login() {
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

  return (
    <div>
      <LoginForm loading={loading} onSubmit={variables => login({ variables })}/>
      {error && <span>{error.message}</span>}
    </div>
  )
}

export default Login;