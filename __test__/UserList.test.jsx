import { default as UserList } from '@/components/UserList';
import { render, screen, waitFor } from '@testing-library/react';
import { server } from '../mocks/server';
import { rest } from 'msw';

describe('User List - Rendering', () => {
  it('should have John Doe in user list', async () => {
    render(<UserList />);
    expect(await screen.findByText('John Doe')).toBeInTheDocument();

    expect(screen.queryByText('No Users')).not.toBeInTheDocument();
    // await waitFor(()=>{
    //     expect(screen.getByText('John Doe')).toBeInTheDocument();
    // })
  });

  it('should have Jane Doe in user list', async () => {
    server.use(
      rest.get('/api/users', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
            {
              id: 2,
              name: 'Jane Doe',
            },
          ])
        );
      })
    );

    render(<UserList />);
    expect(await screen.findByText('Jane Doe')).toBeInTheDocument();
    expect(screen.queryByText('No Users')).not.toBeInTheDocument();
  });
});
