import { render, screen } from '@testing-library/react';
import UserCard from '../UserCard';

const user = { firstName: 'Test', lastName: 'Mc\'Test' };

test('empty user card', () => {
  const { container } = render(<UserCard />);
  expect(Array.from(container.children)).toEqual([]);
});

test('loading user card', () => {
  render(<UserCard loading={true} user={user} />);
  expect(screen.queryByRole('progressbar')).toBeTruthy();
});

test('full name user card', () => {
  render(<UserCard loading={false} user={user} />);
  expect(screen.queryByRole('progressbar')).toBeFalsy();
  expect(screen.queryByText(`Welcome, ${user.firstName} ${user.lastName}`)).toBeTruthy();
});
