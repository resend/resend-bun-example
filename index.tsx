import { Resend } from "resend";
import { WaitlistEmail } from "./waitlist-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const server = Bun.serve({
  port: 3000,
  async fetch() {
    const res = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Hello from Bun + Resend + React Email 🫓💌",
      react: WaitlistEmail({ name: "Vitor" }),
    });

    return new Response(JSON.stringify(res));
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
