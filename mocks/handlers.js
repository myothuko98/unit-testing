import { rest } from 'msw';

export const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: 'John Doe' }]));
  }),

  rest.post('/api/auth', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: 'admin' }));
  }),
];
