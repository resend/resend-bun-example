# Resend with Bun

This example shows how to use Resend with [Bun](https://bun.sh).

## Prerequisites

To get the most out of this guide, you’ll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## Instructions

1. Run `cp .env.template .env` and replace the API key value.

2. Install dependencies:

```sh
bun install
```

3. Start the server:

```sh
bun index.tsx
```

Navigate to [http://localhost:3000](http://localhost:3000) to send an email with the test parameters.

4. Update the `from` and `to` in the index.tsx file

You can update the `from` and `to` so you send from your own domain and to your email address.
To send emails to anyone, the `from` address must be a verified domain in your account, otherwise you can only send emails to yourself.

## License

MIT License
