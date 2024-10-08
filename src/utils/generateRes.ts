class ResponsePayload {
	isSuccess: boolean;
	hasError: boolean;
	message: String;
	data?: undefined | null | unknown;
	timestamp: Date;
	recipientName: String;
	recipientEmail: String;

	constructor() {
		this.isSuccess = false;
		this.hasError = false;
		this.message = '';
		this.data = null;
		this.timestamp = new Date(); // Timestamp for when the message was created
		this.recipientName = '';
		this.recipientEmail = '';
	}

	setSuccess(message: String, data?: unknown, recipientName = '', recipientEmail = '') {
		this.isSuccess = true;
		this.message = message;
		this.data = data;
		this.recipientName = recipientName;
		this.recipientEmail = recipientEmail;
	}

	setError(message: String, recipientName = '', recipientEmail = '') {
		this.hasError = true;
		this.message = message;
		this.recipientName = recipientName;
		this.recipientEmail = recipientEmail;
	}

	setConflict(message: String, recipientName = '', recipientEmail = '') {
		this.message = message;
		this.recipientName = recipientName;
		this.recipientEmail = recipientEmail;
	}
}

export default ResponsePayload;
