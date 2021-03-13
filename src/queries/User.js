import { gql } from "@apollo/client";

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      email
      firstName
      lastName
    }
  }
`;

export const GET_USER_ID = gql`
  query userID {
    userID @client
  }
`;

export const GET_ME = gql`
  query me {
    me {
      id
      email
      username
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(input: {
      identifier: $email,
      password: $password
    }) {
      jwt
      user {
        id
      }
    }
  }
`;