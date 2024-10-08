import z from 'zod';

// Schema for the name parameter
export const nameParamSchema = z.object({
	name: z.string({
		required_error: 'Name is required',
		invalid_type_error: 'Name must be a string',
	}),
});

// Schema for the email in the request body
export const emailBodySchema = z.object({
	email: z
		.string({
			required_error: 'Email is required',
			invalid_type_error: 'Email must be a string',
		})
		.email('Invalid email address'),
});
