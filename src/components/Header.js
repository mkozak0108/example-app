import React from "react";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core'

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Typography variant="h6">Example App</Typography>
          <Button><Link to="/logout">Logout</Link></Button>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}