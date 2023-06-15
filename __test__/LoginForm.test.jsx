import { default as LoginForm } from '@/components/LoginForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { server } from '../mocks/server';
import { rest } from 'msw';

describe('Login Form - Rendering', () => {
  it('should Enter Username and Password, then click on login button', async () => {
    render(<LoginForm />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeDisabled();
    await userEvent.type(screen.getByLabelText(/Username/), 'john');
    await userEvent.type(screen.getByLabelText(/Password/), 'password');

    expect(loginButton).toBeEnabled();
    await userEvent.click(loginButton);
    expect(await screen.findByText('Login Successful')).toBeInTheDocument();
  });

  it('should login user and display error message', async () => {
    server.use(
      rest.post('/api/auth', (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    render(<LoginForm />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeDisabled();
    await userEvent.type(screen.getByLabelText(/Username/), 'john');
    await userEvent.type(screen.getByLabelText(/Password/), 'password');

    expect(loginButton).toBeEnabled();
    await userEvent.click(loginButton);
    expect(await screen.findByText('Login Failed')).toBeInTheDocument();
  });
});
