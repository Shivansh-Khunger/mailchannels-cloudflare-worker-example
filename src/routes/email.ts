import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';

import { contentTypes, mailApi } from '../constants';
import generateResMessages from '../helpers/resMessageGenerator';
import getExampleEmailContent from '../templates/exampleEmail';
import ResponsePayload from '../utils/generateRes';
import { nameParamSchema, emailBodySchema } from '../validation/exampleEmail';

const app = new Hono();

app.post('/:name', zValidator('param', nameParamSchema), zValidator('form', emailBodySchema), async (c) => {
	const resPayload = new ResponsePayload();
	const body = await c.req.parseBody();

	const recieverName = c.req.param('name');
	const recieverEmail = body['email'];

	const resMessages = generateResMessages('welcome email', recieverName, recieverEmail as string);
	let resMessage: String;

	try {
		const send_request = new Request(mailApi.url, {
			method: 'POST',
			headers: {
				'content-type': contentTypes.json,
			},
			body: JSON.stringify({
				personalizations: [
					{
						to: [{ email: recieverEmail, name: recieverName }],
					},
				],
				from: {
					email: mailApi.senderEmail,
					name: `Shivansh Khunger`,
				},
				subject: 'Hello from Sample Worker!',
				content: [
					{
						type: 'text/html',
						value: getExampleEmailContent({
							name: recieverName,
						}),
					},
				],
			}),
		});

		const sentEmail = await fetch(send_request);

		if (sentEmail.ok) {
			// Set the response message
			resMessage = resMessages.successMessage;

			// Update the response payload
			resPayload.setSuccess(resMessage, sentEmail, recieverName, recieverEmail as string);

			// Return a successful response with the response payload
			return Response.json(resPayload, { status: 200 });
		} else {
			resMessage = resMessages.notSucessMessage;
			resPayload.setConflict(resMessage, recieverName, recieverEmail as string);

			console.log(sentEmail.body);

			return Response.json(resPayload, { status: 409 });
		}
	} catch (err) {
		console.error(err);
		resMessage = resMessages.errorMessage;
		resPayload.setError(resMessage, recieverName, recieverEmail as string);
		return c.json(resPayload, 500);
	}
});

export default app;
