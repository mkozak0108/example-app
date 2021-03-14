import { render, screen, fireEvent, act } from '@testing-library/react';
import LoginForm from '../LoginForm';


test('login form render', () => {
  render(<LoginForm />);
});

test('loading login form', () => {
  render(<LoginForm loading={true}/>);
  expect(screen.queryByRole('progressbar')).toBeTruthy();
});

test('error login form', () => {
  const error = 'Test Error';
  render(<LoginForm loading={false} error={error} />);
  expect(screen.queryByText(error)).toBeTruthy();
});

test('login form submit', async () => {
  const onSubmit = jest.fn();
  const email = 'test@test.test';
  const password = 'test123';

  render(<LoginForm loading={false} onSubmit={onSubmit} />);

  act(() => {
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: email }});
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: password }});
  });

  await act(async () => {
    fireEvent.click(screen.getByText('Login'));
  });

  expect(onSubmit).toBeCalled();
});
