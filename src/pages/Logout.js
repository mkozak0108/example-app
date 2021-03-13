import { useApolloClient } from "@apollo/client";
import { useHistory } from 'react-router-dom';

import { userIDVar } from '../services';

function Logout() {
  const client = useApolloClient();
  const history = useHistory();

  localStorage.removeItem('token');
  localStorage.removeItem('userID');
  client.clearStore().then(() => {
    userIDVar('');
    history.replace('/login');
  });

  return null;
}

export default Logout;