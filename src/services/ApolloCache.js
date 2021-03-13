import {
  InMemoryCache,
  makeVar
} from '@apollo/client';


export const userIDVar = makeVar(localStorage.getItem('userID'));

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        userID: {
          read: () => userIDVar()
        }
      }
    }
  }
});