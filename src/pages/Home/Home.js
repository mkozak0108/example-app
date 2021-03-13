import React from "react";
import { useQuery } from '@apollo/client';

import './Home.css';
import { UserCard, Header } from '../../components';
import { GET_USER_ID, GET_USER } from '../../queries';

function Home() {
  const { data: { userID } } = useQuery(GET_USER_ID);
  const { data: userData, loading } = useQuery(GET_USER, {
    variables: { id: userID },
    skip: !userID
  });


  return (
    <div className="home-root">
      <Header/>
      <div className="home-content">
        <UserCard loading={loading} user={userData ? userData.user : null}/>
      </div>
    </div>
  )
}

export default Home;