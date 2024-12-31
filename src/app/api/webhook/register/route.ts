import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "svix";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  // Fetch headers for verification
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id"); // Corrected header name
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature-ed25519");

  // Validate if the necessary headers are provided
  if (!svix_id || !svix_signature || !svix_timestamp) {
    return new Response("Missing required headers", { status: 400 });
  }

  // Extract payload from the request
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Initialize the Svix Webhook and verify the signature
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature-ed25519": svix_signature,
    }) as WebhookEvent;
  } catch (e) {
    console.error("Error verifying webhook", e); // Log the error
    return new Response("Failed to parse or verify webhook", { status: 400 });
  }

  // Extract user data from the event and process it
  const { id, email } = evt.data;
  const eventType = evt.type;

  if (eventType === "user.created") {
    try {
      // Store the user data in the database
      await prisma.user.create({
        data: {
          email,
          svixId: id, // Assuming you want to store Svix ID along with email
        },
      });

      return new Response("User created successfully", { status: 200 });
    } catch (error) {
      console.error("Error saving user to database", error); // Log database error
      return new Response("Failed to store user", { status: 500 });
    }
  }

  // Return a response if event type is not 'user.created'
  return new Response("Event type not supported", { status: 400 });
}
