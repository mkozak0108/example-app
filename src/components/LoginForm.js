import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Grid, CircularProgress } from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import './LoginForm.css'

function LoginForm({ onSubmit, loading = false, error }) {
  const { handleSubmit, control } = useForm();

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" alignItems="center">
        <div className="login-form-control">
          <Controller defaultValue="" as={TextField} name="email" type="email" placeholder="Email" autoFocus required control={control} />
        </div>
        <div className="login-form-control">
          <Controller defaultValue="" as={TextField} name="password" type="password" placeholder="Password" required control={control} />
        </div>

        <div className="login-form-control">
          <Button className="login-form-submit" variant="contained" color="primary" disabled={loading} type="submit">
            Login
            {loading && <CircularProgress className="login-form-loader" size={14}/>}
          </Button>
        </div>

        {error && <Alert severity="error">{error}</Alert>}
      </Grid>
    </form>
  )
}


export default LoginForm;