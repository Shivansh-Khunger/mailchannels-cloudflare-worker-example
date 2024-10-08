# Hono Cloudflare Worker Email Service

This repository contains a sample Hono Cloudflare Worker that uses the MailChannels API to act as an email worker. The worker is designed to send emails using the MailChannels service, making it easy to integrate email functionality into your applications.

## Features

- **Cloudflare Worker**: Utilizes Cloudflare Workers to handle email sending.
- **Hono Framework**: Built with the Hono framework for a lightweight and efficient serverless application.
- **MailChannels API**: Integrates with the MailChannels API to send emails.

## Getting Started

### Prerequisites

- Node.js
- Cloudflare account
- DNS Setup (https://readmedium.com/en/https:/medium.com/@tristantrommer/how-to-send-free-transactional-emails-with-worker-mailchannels-via-cloudflare-workers-818b787b33f9)
- Specify the sender email address in `constants.ts`.

### Deployment

```bash
wrangler publish
```

### Example Request

```
curl -X POST https://your-worker-url.example.com/send-email \
  -H "Content-Type: application/json" \
  -d '{
        "name": "Recipient Name",
        "email": "recipient@example.com"
      }'
```

## Preview

You can preview a sample email by clicking the link in the repository description.
