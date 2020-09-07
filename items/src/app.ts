import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@tb-marketplace/common';

import { showItemRouter } from './routes/show';
import { createItemRouter } from './routes/new';
import { indexItemRouter } from './routes/index';

const app = express();
app.use(json());
app.set('trust proxy', true); // Ingress NGINX
app.use(
  cookieSession({
    signed: false, // No encryption as JWT already secure
    secure: process.env.NODE_ENV !== 'test', // Must be HTTPS (not during tests)
  }),
);
app.use(currentUser);

app.use(createItemRouter);
app.use(showItemRouter);
app.use(indexItemRouter);
// app.use(updateItemRouter);

// Catch all route
app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
