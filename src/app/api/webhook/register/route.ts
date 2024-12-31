// Filepath: /src/app/api/webhook/register/route.ts

import { NextResponse } from "next/server";
import { Webhook, WebhookEvent } from "svix";
import prisma from "@/lib/prisma"; // Adjust based on your project structure

// Define the shape of your webhook payload for "user.created" event
interface UserCreatedPayload {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  // Add other relevant fields based on Clerk's webhook payload
}

export async function POST(req: Request) {
  console.log("Received Webhook Request");

  const headers = req.headers;
  const svix_id = headers.get("svix-id");
  const svix_timestamp = headers.get("svix-timestamp");
  const svix_signature = headers.get("svix-signature-ed25519");

  // Validate required headers
  if (!svix_id || !svix_signature || !svix_timestamp) {
    console.error("Missing required headers");
    return NextResponse.json({ message: "Missing required headers" }, { status: 400 });
  }

  const body = await req.text();
  console.log("Webhook Body:", body);

  // Initialize Svix Webhook with the secret
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    console.error("WEBHOOK_SECRET is not defined");
    return NextResponse.json({ message: "Server Misconfiguration" }, { status: 500 });
  }

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;
  try {
    evt = wh.verify(body, {
      id: svix_id,
      timestamp: svix_timestamp,
      signature: svix_signature,
    });
    console.log("Webhook verified successfully:", evt.type);
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return NextResponse.json({ message: "Invalid signature" }, { status: 400 });
  }

  // Handle specific event types
  if (evt.type === "user.created") {
    const data = evt.payload as UserCreatedPayload;
    console.log("Handling 'user.created' event for user ID:", data.id);

    // Example: Save the new user to your database
    try {
      await prisma.user.create({
        data: {
          id: data.id,
          email: data.email,
          // Add other fields as necessary
        },
      });
      console.log("User saved to database:", data.id);
    } catch (error) {
      console.error("Database error:", error);
      return NextResponse.json({ message: "Database error" }, { status: 500 });
    }
  } else {
    console.warn(`Unhandled event type: ${evt.type}`);
  }

  console.log("Webhook processing completed");
  return NextResponse.json({ message: "Webhook received" }, { status: 200 });
}

/**
 * Generates a unique identifier or token if needed.
 * Modify as per your requirements.
 */
function generateUniqueLink(): string {
  return crypto.randomBytes(16).toString("hex");
}