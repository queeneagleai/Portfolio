import { CONTACT_WEBHOOK_URL } from "./constants";
import type { ContactFormData } from "../types";

interface WebhookResponse {
  status?: string;
  [key: string]: unknown;
}

/**
 * Submits the contact form to the n8n webhook.
 * n8n owns Airtable storage + email notification + confirmation email —
 * this function does nothing beyond the POST + response check.
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return {
        success: false,
        message: "Something went wrong sending your message. Please try again.",
      };
    }

    const result: WebhookResponse = await response.json();

    if (result.status === "success") {
      return { success: true, message: "Message sent successfully." };
    }

    return {
      success: false,
      message: "Something went wrong sending your message. Please try again.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        "Couldn't reach the server. Check your connection and try again.",
    };
  }
}
