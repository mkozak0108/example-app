import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab'

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Grid contianer direction="row" alignItems="center" justify="center">
      <Alert severity="error">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <Button variant="contained" onClick={resetErrorBoundary}>Reload page</Button>
      </Alert>
    </Grid>
  )
}