import { Hono } from 'hono';
import emailRouter from './routes/email';
import getBaseContent from './templates/base';

const app = new Hono();

app.get('/', (c) => {
	return c.html(getBaseContent());
});

app.route('/email', emailRouter);

export default app;
