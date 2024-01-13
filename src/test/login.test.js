import '@testing-library/jest-dom';
import { prettyDOM, render, screen } from '@testing-library/react';
import Login from '../views/Login/Login.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('../assets/background.png');

test('Should have a user name and password field, also submit button', () => {
  const container = render(
    <QueryClientProvider client={new QueryClient()}>
      <Login />
    </QueryClientProvider>
  );

  const userNameField = container.getByText('Usuario');
  const passwordNameField = container.getByText('Contraseña');
  const submitButton = container.getByText('Login');

  expect(userNameField).toBeInTheDocument();
  expect(passwordNameField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
