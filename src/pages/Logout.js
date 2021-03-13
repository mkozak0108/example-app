import { useApolloClient } from "@apollo/client";

import { userIDVar } from '../services';

function Logout() {
  const client = useApolloClient();

  localStorage.removeItem('token');
  localStorage.removeItem('userID');
  userIDVar(null);
  client.resetStore();

  return null;
}

export default Logout;