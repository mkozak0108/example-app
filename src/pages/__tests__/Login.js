import React, { useEffect } from "react";
import { render, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import cache from '../../services/ApolloCache';
import { GET_USER_ID, LOGIN } from '../../queries';
import Login from '../Login/Login';

function MockLoginFarm({ onSubmit }) {
  useEffect(() => {
    onSubmit({ email: 'test@test.test', password: 'test123' });
  }, []);

  return <mock-widget />;
}

jest.mock('../../components/LoginForm', () => MockLoginFarm);

const mockReplace = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    replace: mockReplace
  }),
}));

const mocks = [{
  request: {
    query: GET_USER_ID
  },
  result: {
    data: {
      userID: 'testID'
    },
  }
}, {
  request: {
    query: LOGIN,
    variables: { email: 'test@test.test', password: 'test123' }
  },
  result: {
    data: {
      login : {
        jwt: 'test',
        user: {
          id: 'testID'
        }
      }
    }
  }
}];

beforeEach(async () => {
  render(
    <MockedProvider mocks={mocks} removeTypename={true} cache={cache}>
      <Login/>
    </MockedProvider>
  );

  await act(async () => {
    await new Promise(res => setTimeout(res, 0));
  });
});

test('save result to locale storage', () => {
  expect(localStorage.getItem('token')).toEqual('test');
  expect(localStorage.getItem('userID')).toEqual('testID');
});

test('redirect to home page', () => {
  expect(mockReplace).toBeCalledWith('/');
});

jest.resetModules();