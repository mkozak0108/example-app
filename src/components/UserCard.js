import React from "react";
import { Typography, Card, CardContent, CircularProgress } from '@material-ui/core'

function UserCard({ user, loading }) {
  if (loading) {
    return <CircularProgress/>
  }

  const fullName = [user.firstName, user.lastName].join(' ');

  return (
    <Card>
      <CardContent>
        <Typography variant="h3">
          Welcome, {fullName}
        </Typography>
      </CardContent>
    </Card>

  )
}


export default UserCard;