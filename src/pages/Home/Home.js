import React from "react";
import { useQuery } from '@apollo/client';

import { UserCard } from '../../components';
import { GET_USER_ID, GET_USER } from '../../queries';

function Home() {
  const { data: { userID } } = useQuery(GET_USER_ID);
  const { data: userData } = useQuery(GET_USER, {
    variables: { id: userID },
    skip: !userID
  });

  if (!userData) {
    return null;
  }

  return (
    <div>
      <UserCard user={userData.user}/>
    </div>
  )
}

export default Home;